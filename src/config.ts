import { config } from 'dotenv';

config();

export default {
  SERVER_PORT: process.env.PORT || 5000,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_DATABASE: process.env.MONGO_DB,
  JWT_SEED: process.env.SECRET_JWT_SEED,
};
