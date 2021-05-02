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

export type CurrencyStore = {
  [key: string]: Currency;
};

export type Preset = {
  [key in CurrencyCode]: number;
};

export type DonationData = {
  amount: number;
  currency: string;
};

export enum GetterType {
  currencies = "currencies",
  donationData = "donationData",
}

export enum StateType {
  activeCurrency = "activeCurrency",
}

export enum ActionType {
  setDonationValue = "setDonationValue",
  setActiveCurrency = "setActiveCurrency",
  submitDonation = "submitDonation",
}

export enum MutationType {
  setDonationValue = "setDonationValue",
  setActiveCurrency = "setActiveCurrency",
  submitDonation = "submitDonation",
}
