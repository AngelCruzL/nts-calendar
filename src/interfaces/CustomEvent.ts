import { Document } from 'mongoose';

export interface CustomEvent extends Document {
  user: string;
}
