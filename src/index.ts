import express from 'express';
import config from './config';
import authRoutes from './routes/auth.routes';
import './database';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(config.SERVER_PORT, () => {
  console.log('Server listening on port ' + config.SERVER_PORT);
});
