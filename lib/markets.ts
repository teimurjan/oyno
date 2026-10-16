import type { Lang } from "./i18n";

/**
 * How each market writes a number and which currency it is shown. Pure and dependency-free,
 * because the funnel bundle imports it: nothing here may read `process.env`.
 */
export interface Market {
  numberLocale: string;
  currency: string;
}

export const MARKETS: Record<Lang, Market> = {
  en: { numberLocale: "en-US", currency: "USD" },
  de: { numberLocale: "de-DE", currency: "USD" },
  fr: { numberLocale: "fr-FR", currency: "USD" },
  es: { numberLocale: "es-ES", currency: "USD" },
  "es-MX": { numberLocale: "es-MX", currency: "USD" },
  "pt-BR": { numberLocale: "pt-BR", currency: "USD" },
  it: { numberLocale: "it-IT", currency: "USD" },
  nl: { numberLocale: "nl-NL", currency: "USD" },
  pl: { numberLocale: "pl-PL", currency: "USD" },
  ru: { numberLocale: "ru-RU", currency: "USD" },
};

/** A money formatter for one market, at the currency's own precision unless told otherwise. */
export function moneyFormatter(market: Market, fractionDigits?: number) {
  const format = new Intl.NumberFormat(market.numberLocale, {
    style: "currency",
    currency: market.currency,
    ...(fractionDigits === undefined
      ? {}
      : { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits }),
  });
  return (value: number) => format.format(value);
}
