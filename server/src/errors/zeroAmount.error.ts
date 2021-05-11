import { ResponseErrorMessageEnum } from '../types';

export class ZeroAmountError extends Error {
  constructor(message: string = ResponseErrorMessageEnum.zeroAmount) {
    super(message);
    this.name = 'ZeroAmountErrorError';
  }
}
