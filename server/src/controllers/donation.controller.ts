import { Context } from 'koa';
import { DonationRequest, DonationResponse, ResponseErrorMessageEnum } from '../types';
import { CurrencyNotFoundError, ZeroAmountError } from '../errors';
import { Donation } from '../models';
import { Currency } from '../models';

export default class DonationController {
  public static async record(ctx: Context): Promise<void> {
    const donation = <DonationRequest>ctx.request.body;

    try {
      const currency = await Currency.findOne({ code: donation.currency });

      if (!currency) throw new CurrencyNotFoundError();
      if (donation.amount === 0) throw new ZeroAmountError();

      await Donation.create({ amount: donation.amount, currency: currency._id });
      ctx.response.status = 200;
      ctx.response.body = <DonationResponse>{ ok: true };
    } catch (error) {
      if (error.message === ResponseErrorMessageEnum.currencyNotFound) {
        ctx.response.status = 404;
      } else {
        ctx.response.status = 400;
      }

      ctx.response.body = <DonationResponse>{ ok: false, error: error.message };
    }
  }

  public static async all(ctx: Context): Promise<void> {
    try {
      const donations = await Donation.find({}).populate('currency');

      ctx.response.status = 200;
      ctx.response.body = donations;
    } catch (error) {
      ctx.response.status = 400;
      ctx.response.body = <DonationResponse>{ ok: false, error: error.message };
    }
  }
}
