export interface DonationRequest {
  amount: number;
  currency: string;
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
