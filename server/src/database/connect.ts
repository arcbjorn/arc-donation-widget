import mongoose from 'mongoose';
import { seed } from './seed';
import { ConsoleMessageType } from '../types';

export const connect = (mongodb_uri?: string): void => {
  if (!mongodb_uri) {
    console.error(`${ConsoleMessageType.invalidMongoDbURI}`);
    return;
  }

  const connect = async () => {
    try {
      await mongoose.connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true });
      console.info(`${ConsoleMessageType.connectionSuccessTo} ${mongodb_uri}`);
      await seed();
    } catch (error) {
      console.error(`${ConsoleMessageType.connectionErrorTo} ${mongodb_uri}`);
      process.exit(1);
    }
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
