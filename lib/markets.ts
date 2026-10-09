import type { Lang } from "./i18n";

/**
 * What a shop in each market pays for things, and how that market writes a number.
 *
 * Per market and never converted: $0.17/kWh at spot is thirteen kopecks, off by a factor of
 * forty, and $1,199 is not what a Bambu costs in Warsaw. These are the rows of
 * `FunnelEconomy.swift` term for term — the app's funnel, the web funnel's demo print and the
 * home page's receipt all quote one shop per market. Change a row there and change it here.
 *
 * Pure and dependency-free, because the funnel bundle imports it: nothing here may read
 * `process.env`.
 */
export interface MarketEconomy {
  currency: string;
  printerPrice: number;
  upkeepPerYear: number;
  electricityPerKwh: number;
  laborPerHour: number;
  /** A one-kilogram roll, by material. */
  perKg: { PLA: number; PETG: number; ASA: number };
  /** Nozzle wear, plate adhesive, a wipe of IPA — the small stuff one job uses up. */
  consumables: number;
  /** Etsy's flat listing component in this currency. The percentage is the same everywhere. */
  etsyFeeFixed: number;
}

const economy = (
  currency: string,
  printerPrice: number,
  upkeepPerYear: number,
  electricityPerKwh: number,
  laborPerHour: number,
  [PLA, PETG, ASA]: [number, number, number],
  consumables: number,
  etsyFeeFixed: number,
): MarketEconomy => ({
  currency,
  printerPrice,
  upkeepPerYear,
  electricityPerKwh,
  laborPerHour,
  perKg: { PLA, PETG, ASA },
  consumables,
  etsyFeeFixed,
});

const USD = economy("USD", 1_199, 180, 0.17, 28, [22, 26.5, 29], 0.8, 0.45);
/** One row for seven countries, so a euro-area middle rather than any one country's. */
const EUR = economy("EUR", 1_099, 170, 0.3, 30, [22, 26, 29], 0.8, 0.4);
const MXN = economy("MXN", 24_000, 3_600, 3, 180, [550, 650, 750], 20, 8);
const BRL = economy("BRL", 7_500, 1_100, 0.85, 50, [160, 190, 220], 6, 2.5);
const SEK = economy("SEK", 12_500, 1_900, 2, 400, [260, 300, 340], 9, 4.5);
const DKK = economy("DKK", 8_500, 1_300, 2.3, 350, [175, 205, 230], 6, 3);
const NOK = economy("NOK", 13_000, 2_000, 1.3, 500, [270, 310, 350], 9, 4.5);
const PLN = economy("PLN", 4_700, 700, 1.1, 90, [95, 110, 125], 3.5, 1.8);
const CZK = economy("CZK", 26_000, 3_900, 4.5, 500, [550, 620, 700], 20, 10);
const TRY = economy("TRY", 45_000, 7_000, 3, 350, [900, 1_050, 1_200], 30, 15);
/** Filament at what the local brands charge rather than an imported roll — priced off an
 * import, three times the filament stops underpricing here and the receipt argues against
 * the product. */
const RUB = economy("RUB", 129_000, 19_000, 6, 700, [1_700, 2_000, 2_300], 60, 45);
const UAH = economy("UAH", 45_000, 6_500, 4.32, 300, [700, 820, 950], 25, 18);

export interface Market {
  /** Where the digits, the separators and the symbol's placement come from. */
  numberLocale: string;
  economy: MarketEconomy;
}

/** Keyed on the whole tag: `pt-BR` bills in reais and `pt-PT` in euro, so the language alone
 * is not the market. The same pairing `ScreenshotFixtures.Economy.forTag` makes — allowed for
 * a page with one audience per language, never for a shop, which picks its own currency. */
export const MARKETS: Record<Lang, Market> = {
  en: { numberLocale: "en-US", economy: USD },
  es: { numberLocale: "es-ES", economy: EUR },
  "es-MX": { numberLocale: "es-MX", economy: MXN },
  fr: { numberLocale: "fr-FR", economy: EUR },
  de: { numberLocale: "de-DE", economy: EUR },
  "pt-BR": { numberLocale: "pt-BR", economy: BRL },
  "pt-PT": { numberLocale: "pt-PT", economy: EUR },
  it: { numberLocale: "it-IT", economy: EUR },
  nl: { numberLocale: "nl-NL", economy: EUR },
  sv: { numberLocale: "sv-SE", economy: SEK },
  da: { numberLocale: "da-DK", economy: DKK },
  nb: { numberLocale: "nb-NO", economy: NOK },
  fi: { numberLocale: "fi-FI", economy: EUR },
  pl: { numberLocale: "pl-PL", economy: PLN },
  cs: { numberLocale: "cs-CZ", economy: CZK },
  tr: { numberLocale: "tr-TR", economy: TRY },
  ru: { numberLocale: "ru-RU", economy: RUB },
  uk: { numberLocale: "uk-UA", economy: UAH },
};

/** A money formatter for one market, at the currency's own precision unless told otherwise. */
export function moneyFormatter(market: Market, fractionDigits?: number) {
  const format = new Intl.NumberFormat(market.numberLocale, {
    style: "currency",
    currency: market.economy.currency,
    ...(fractionDigits === undefined
      ? {}
      : { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits }),
  });
  return (value: number) => format.format(value);
}
