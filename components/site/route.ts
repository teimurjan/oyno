import { notFound } from "next/navigation";
import { DEFAULT_LANG, isPrefixedLocale, type Lang } from "@/lib/i18n";

/** A library route's params: its own, plus `locale` when it is served under `app/[locale]`. */
export type RouteProps<T> = { params: Promise<T & { locale?: string }> };

/** The language a library route renders in: English at the root, the prefix's locale under it. */
export function langOfSegment(locale: string | undefined): Lang {
  if (locale === undefined) return DEFAULT_LANG;
  return isPrefixedLocale(locale) ? locale : notFound();
}
