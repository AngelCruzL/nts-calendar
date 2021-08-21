import mongoose, { ConnectOptions } from 'mongoose';
import config from './config';

(async () => {
  try {
    const mongooseOptions: ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };
    const db = await mongoose.connect(
      `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.ndk7t.mongodb.net/${config.MONGO_DATABASE}`,
      mongooseOptions
    );

    console.log('DB online:', db.connection.name);
  } catch (error) {
    console.log(error);
    throw new Error('Error al iniciar la BD');
  }
})();
