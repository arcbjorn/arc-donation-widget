import { ResponseErrorMessageEnum } from '../types';

export class CurrencyNotFoundError extends Error {
  constructor(message: string = ResponseErrorMessageEnum.currencyNotFound) {
    super(message);
    this.name = 'CurrencyNotFoundError';
  }
}
