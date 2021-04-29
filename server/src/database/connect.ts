import mongoose from 'mongoose';
import { seed } from './seed';

export const connect = (mongodb_uri?: string): void => {
  if (!mongodb_uri) {
    console.error('MongoDB_URI is invalid');
    return;
  }

  const connect = async () => {
    try {
      await mongoose.connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true });
      console.info(`Successfully connected to ${mongodb_uri}`);
      await seed();
    } catch (error) {
      console.error('Error connecting to database: ', error);
      process.exit(1);
    }
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
