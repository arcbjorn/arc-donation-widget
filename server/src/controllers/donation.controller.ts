import { Context } from 'koa';
import { DonationRequest } from '../types';

export default class DonationController {
  public static async record(ctx: Context, next: () => Promise<any>) {
    const data = <DonationRequest>ctx.request.body;
    console.log(data);

    ctx.response.body = { amount: data.amount, currency: data.currency };
    ctx.response.status = 200;

    // ctx.response.

    await next();
  }

  public static async all(ctx: Context, next: () => Promise<any>) {
    ctx.response.body = [
      {
        amount: 40,
        currency: 'USD',
      },
    ];
    ctx.response.status = 200;

    await next();
  }
}
