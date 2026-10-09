import { describe, expect, test } from "bun:test";
import { cookieDomain, sessionCookieOptions, SESSION_COOKIE } from "./cookie";

describe("cookieDomain", () => {
  test("the site and the app host share the apex", () => {
    expect(cookieDomain("oyno.app")).toBe("oyno.app");
    expect(cookieDomain("app.oyno.app")).toBe("oyno.app");
  });

  test("a preview host is its own apex", () => {
    expect(cookieDomain("takt-git-main-team.vercel.app")).toBe("takt-git-main-team.vercel.app");
  });

  test("a port is not part of the domain", () => {
    expect(cookieDomain("app.oyno.app:443")).toBe("oyno.app");
  });

  test("localhost gets no domain, with or without the app label", () => {
    expect(cookieDomain("localhost:7071")).toBeUndefined();
    expect(cookieDomain("app.localhost:7071")).toBeUndefined();
  });

  test("an IP gets no domain", () => {
    expect(cookieDomain("127.0.0.1:7071")).toBeUndefined();
    expect(cookieDomain("[::1]:7071")).toBeUndefined();
  });
});

describe("sessionCookieOptions", () => {
  test("carries the domain only when there is one", () => {
    expect(sessionCookieOptions("app.oyno.app")).toEqual({ name: SESSION_COOKIE, domain: "oyno.app" });
    expect(sessionCookieOptions("localhost:7071")).toEqual({ name: SESSION_COOKIE });
  });
});
