export interface DonationRequest {
  amount: number;
  currency: string;
}

export interface DonationResponse {
  ok: boolean;
  error?: string;
}

export enum ModelType {
  Donation = 'Donation',
  Currency = 'Currency',
}

export enum ConsoleMessageType {
  invalidMongoDbURI = 'MongoDB_URI is invalid',
  connectionSuccessTo = 'Successfully connected to:',
  connectionErrorTo = 'Error connecting to database:',
  currenciesSeedError = 'Error while seeding default currencies:',
  serverStartSuccess = 'Server started at: http://localhost:',
}

export enum ResponseErrorType {
  currencyNotFound = 'Donation currency does not exit in database. Might be seeding error',
}
