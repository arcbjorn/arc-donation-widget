import mongoose, { Schema, Document } from 'mongoose';
import { ModelType } from '../types';

export interface ICurrency extends Document {
  name: string;
  code: string;
  symbol: string;
  rate: number;
}

const CurrencySchema: Schema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  symbol: { type: String, required: true },
  rate: { type: Number, required: true },
});

// Export the model and return ICurrency interface
export const Currency = mongoose.model<ICurrency>(ModelType.Currency, CurrencySchema);
