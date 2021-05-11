export enum CurrencyCode {
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
  RUB = "RUB",
}

export interface DonationResponse {
  ok: boolean;
  error?: string;
}

export type Currency = {
  name: string;
  code: CurrencyCode;
  symbol: string;
  rate: number;
};

export type CurrencyStore = {
  [key in CurrencyCode]: Currency;
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
  setDonationValueByPreset = "setDonationValueByPreset",
  setDonationValueByInput = "setDonationValueByInput",
  setActiveCurrency = "setActiveCurrency",
  submitDonation = "submitDonation",
}

export enum MutationType {
  setDonationValue = "setDonationValue",
  setActiveCurrency = "setActiveCurrency",
  submitDonation = "submitDonation",
}
