import { Currency, CurrencyCode, Preset } from "@/types";

export const currencies: Currency[] = [
  { name: "US Dollar", code: "USD", symbol: "$", rate: 1 },
  { name: "Euro", code: "EUR", symbol: "€", rate: 0.897597 },
  { name: "British Pound", code: "GBP", symbol: "£", rate: 0.81755 },
  { name: "Russian Ruble", code: "RUB", symbol: "₽", rate: 63.461993 },
];

const usdPesets = [40, 100, 200, 1000, 2500, 5000];

function convertCurrency(value: number, rate: number): string {
  const result = value * rate;
  return new Intl.NumberFormat("en-US").format(result);
}

export function initPresets(): Preset[] {
  let presets: Preset[] = [];
  const rates: { [key: string]: number } = {};

  currencies.forEach(({ code, rate }) => {
    rates[code] = rate;
  });

  presets = usdPesets.map((usdValue) => ({
    [CurrencyCode.USD]: convertCurrency(usdValue, rates[CurrencyCode.USD]),
    [CurrencyCode.EUR]: convertCurrency(usdValue, rates[CurrencyCode.EUR]),
    [CurrencyCode.GBP]: convertCurrency(usdValue, rates[CurrencyCode.GBP]),
    [CurrencyCode.RUB]: convertCurrency(usdValue, rates[CurrencyCode.RUB]),
  }));

  return presets;
}
