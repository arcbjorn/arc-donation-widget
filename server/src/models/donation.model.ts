import mongoose, { Schema, Document } from 'mongoose';
import { ModelType } from '../types';
import { ICurrency } from './currency.model';

export interface IDonation extends Document {
  _id: Schema.Types.ObjectId;
  amount: number;
  currency: ICurrency['_id'];
}

const DonationSchema: Schema = new Schema(
  {
    amount: { type: Number, required: true },
    currency: {
      type: Schema.Types.ObjectId,
      ref: ModelType.Currency,
      required: true,
    },
  },
  { timestamps: true },
);

// Export the model & return IDonation interface
export const Donation = mongoose.model<IDonation>(ModelType.Donation, DonationSchema);
