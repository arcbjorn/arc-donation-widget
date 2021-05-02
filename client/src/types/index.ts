export enum CurrencyCode {
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
  RUB = "RUB",
}

export type Currency = {
  name: string;
  code: string;
  symbol: string;
  rate: number;
};

export type Preset = {
  [key in CurrencyCode]: number;
};

export type Donation = {
  value: number;
  currency: Currency;
};

export enum MutationType {
  setDonationValue = "setDonationValue",
}

export enum ActionType {
  setDonationValue = "setDonationValue",
}
