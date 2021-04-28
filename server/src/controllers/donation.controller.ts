import { Context } from 'koa';
import { TestRequest } from '../types';

export default class DonationController {
  public static async record(ctx: Context, next: () => Promise<any>) {
    const data = <TestRequest>ctx.request.body;
    ctx.response.body = { name: data.test };
    ctx.response.status = 200;

    await next();
  }
}
