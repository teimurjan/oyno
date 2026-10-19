import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { copyFor } from "@/components/site/copy";

/** The card a shared link shows, drawn once at build from the planet and the home headline. */

export const alt = copyFor("en").home.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fromRoot = (file: string) => readFile(path.join(process.cwd(), file));

export default async function Image() {
  const [font, planet] = await Promise.all([
    fromRoot("ios/Oyno/Resources/Fonts/Figtree-ExtraBold.ttf"),
    fromRoot("art/source/planet.png"),
  ]);
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        padding: "0 72px",
        background: "linear-gradient(180deg, #a2c8ef 0%, #d3e6f8 34%, #fff1db 64%, #fff8ef 100%)",
        color: "#18202e",
        fontFamily: "Figtree",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontSize: 40 }}>Oyno</div>
        <div style={{ marginTop: 28, fontSize: 70, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
          Your phone eats the evening. Take ten minutes back.
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/png;base64,${planet.toString("base64")}`} width={440} height={440} alt="" />
    </div>,
    { ...size, fonts: [{ name: "Figtree", data: font, weight: 800 }] },
  );
}
