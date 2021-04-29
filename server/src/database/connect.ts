import mongoose from 'mongoose';

export default (mongodb_uri: string | undefined) => {
  if (!mongodb_uri) {
    console.log('MongoDB_URI is invalid');
    return;
  }

  const connect = async () => {
    try {
      await mongoose.connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true });
      return console.info(`Successfully connected to ${mongodb_uri}`);
    } catch (error) {
      console.error('Error connecting to database: ', error);
      return process.exit(1);
    }
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
