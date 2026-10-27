import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

/** OpenAI's image edits, which paints every illustration from a style reference. */
const MODEL = "gpt-image-2.5-sunburst";
const ATTEMPTS = 4;

export type Painted = { ok: true; usage: unknown } | { ok: false; error: string; retry: boolean };

function requireOpenAIKey() {
  if (process.env.OPENAI_API_KEY) return;
  console.error("OPENAI_API_KEY is not set.");
  process.exit(1);
}

/** The edits API wants edges in multiples of 16, so the reference is resized to the canvas. */
const loadReference = async (file: string, canvas: number) =>
  new Blob([await sharp(file).resize(canvas, canvas).png().toBuffer()], { type: "image/png" });

async function paintOnce(reference: Blob, prompt: string, canvas: number, out: string): Promise<Painted> {
  const form = new FormData();
  form.append("model", MODEL);
  form.append("image[]", reference, "reference.png");
  form.append("prompt", prompt);
  form.append("size", `${canvas}x${canvas}`);
  form.append("quality", "high");
  form.append("background", "transparent");
  form.append("output_format", "png");
  const response = await fetch("https://api.openai.com/v1/images/edits", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    body: form,
  }).catch((error: Error) => error);
  if (response instanceof Error) return { ok: false, error: response.message, retry: true };
  const body = (await response.json().catch(() => ({}))) as {
    data?: { b64_json: string }[];
    usage?: unknown;
    error?: { message: string };
  };
  const image = body.data?.[0]?.b64_json;
  if (!response.ok || !image) {
    const retry = response.status === 429 || response.status >= 500;
    return { ok: false, error: `${response.status} ${body.error?.message ?? "no image"}`, retry };
  }
  await Bun.write(out, Buffer.from(image, "base64"));
  return { ok: true, usage: body.usage };
}

/** Rate limits and server errors back off and try again; a refused prompt does not. */
async function paint(reference: Blob, prompt: string, canvas: number, out: string): Promise<Painted> {
  for (let attempt = 1; ; attempt++) {
    const result = await paintOnce(reference, prompt, canvas, out);
    if (result.ok || !result.retry || attempt === ATTEMPTS) return result;
    await Bun.sleep(2 ** attempt * 5_000);
  }
}

/** Paints the queue a few at a time, logging each job, and returns how many failed. */
async function paintQueue<Job extends { id: string }>(
  queue: Job[],
  concurrency: number,
  run: (job: Job) => Promise<Painted>,
): Promise<number> {
  const pending = [...queue];
  let done = 0;
  let failed = 0;
  const worker = async () => {
    for (let job = pending.shift(); job; job = pending.shift()) {
      const result = await run(job);
      done++;
      if (result.ok) console.log(`${done}/${queue.length} ${job.id}: ok`);
      else {
        failed++;
        console.error(`${done}/${queue.length} ${job.id}: ${result.error}`);
      }
    }
  };
  await Promise.all(Array.from({ length: concurrency }, worker));
  return failed;
}

interface Painter<Job extends { id: string }> {
  /** Everything there is to paint, in order. */
  jobs: Job[];
  /** What the jobs are, for the log: "keepsakes". */
  noun: string;
  /** The file that lists the jobs, named when an unknown id is asked for. */
  source: string;
  reference: string;
  out: string;
  canvas: number;
  concurrency: number;
  prompt: (job: Job) => string;
}

/**
 * Paints every job without a PNG in `out`, or only the ids given on the command line, which
 * repaints them. Exits 1 when the key is missing, an id is unknown or any painting failed.
 */
export async function paintMissing<Job extends { id: string }>(painter: Painter<Job>): Promise<never> {
  requireOpenAIKey();
  const file = (id: string) => path.join(painter.out, `${id}.png`);
  const wanted = process.argv.slice(2);
  const unknown = wanted.filter((id) => !painter.jobs.some((job) => job.id === id));
  if (unknown.length) {
    console.error(`No ${unknown.join(", ")} in ${painter.source}. Add it there first.`);
    process.exit(1);
  }
  const queue = painter.jobs.filter((job) => (wanted.length ? wanted.includes(job.id) : !Bun.file(file(job.id)).size));
  console.log(`Painting ${queue.length} of ${painter.jobs.length} ${painter.noun}.`);

  await mkdir(painter.out, { recursive: true });
  const reference = await loadReference(painter.reference, painter.canvas);
  const failed = await paintQueue(queue, painter.concurrency, (job) =>
    paint(reference, painter.prompt(job), painter.canvas, file(job.id)),
  );
  process.exit(failed ? 1 : 0);
}
