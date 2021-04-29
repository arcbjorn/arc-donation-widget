export interface DonationRequest {
  amount: number;
  currency: string;
}

export enum ModelType {
  Donation = 'Donation',
  Currency = 'Currency',
}
