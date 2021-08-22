import express from 'express';
import cors from 'cors';

import config from './config';
import authRoutes from './routes/auth.routes';
import eventsRoutes from './routes/events.routes';
import './database';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventsRoutes);

app.listen(config.SERVER_PORT, () => {
  console.log('Server listening on port ' + config.SERVER_PORT);
});
