import { describe, expect, test } from "bun:test";
import { LOCALES } from "@/lib/i18n";
import { renderPurchaseEmail } from "./render";

const input = {
  email: "maker@example.com",
  provider: "facebook",
  appStoreUrl: "https://apps.apple.com/app/id123",
  webAppUrl: "https://oyno.app/app",
  postalAddress: "1 Main St <Suite 2>",
};

describe("renderPurchaseEmail", () => {
  test.each([...LOCALES])("%s names the account and carries both ways in", (lang) => {
    const email = renderPurchaseEmail({ ...input, lang });

    for (const part of [email.html, email.text]) {
      expect(part).toContain(input.email);
      expect(part).toContain("Facebook");
      expect(part).toContain(input.appStoreUrl);
      expect(part).toContain(input.webAppUrl);
    }
    expect(email.html).toContain("/badges/app-store.png");
    expect(email.text).not.toContain("unsubscribe");
  });

  test("an email sign-in names no brand", () => {
    const { text } = renderPurchaseEmail({ ...input, lang: "en", provider: "email" });
    expect(text).toContain("Sign in with your email, maker@example.com.");
  });

  test("drops the iPhone half when there is no listing", () => {
    const email = renderPurchaseEmail({ ...input, lang: "en", appStoreUrl: null });
    expect(email.html).not.toContain("app-store.png");
    expect(email.text).not.toContain("App Store");
  });

  test("escapes what it did not write", () => {
    const { html } = renderPurchaseEmail({ ...input, lang: "en" });
    expect(html).toContain("1 Main St &#60;Suite 2&#62;");
  });
});
