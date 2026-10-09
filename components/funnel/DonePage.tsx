import Logo from "@/components/Logo";
import { Accented, useLocale } from "./locale";

const APP_STORE_ID = process.env.NEXT_PUBLIC_APP_STORE_ID;
const APP_STORE_URL = APP_STORE_ID ? `https://apps.apple.com/app/id${APP_STORE_ID}` : null;

/**
 * The handoff. Payment already happened in the Paddle frame and both conversions already
 * fired from `checkout.completed`, so this page reports nothing about money. `/app` is a
 * plain anchor — `proxy.ts` sends it to `app.<host>/` on whatever host served the page.
 */
export function DonePage() {
  const words = useLocale().copy.done;
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="shell py-3">
        <Logo />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-5 py-4 text-center">
        <div className="w-full max-w-[480px]">
          <p className="eyebrow mt-5">{words.eyebrow}</p>
          <h1 className="font-semibold tracking-[-0.02em] mt-2 text-[clamp(24px,6vw,34px)] leading-[1.1]">
            <Accented text={words.headline} />
          </h1>
          <p className="mx-auto mt-4 max-w-[400px] text-[16px] leading-[1.5] opacity-70">
            {words.body}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            {APP_STORE_URL && (
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-90"
              >
                <img
                  src="/badges/app-store.svg"
                  alt={words.badge}
                  decoding="async"
                  className="h-[52px] w-auto aspect-[119.66407/40]"
                />
              </a>
            )}
            <a href="/app" className="text-[14px] font-medium text-accent hover:text-accent-pressed">
              {APP_STORE_URL ? words.orWeb : words.web}
            </a>
          </div>

          <p className="mt-8 text-[12.5px] leading-[1.5] opacity-55">
            {words.receipt}
          </p>
        </div>
      </main>
    </div>
  );
}
