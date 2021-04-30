import { Currency } from '../models';
import { ConsoleMessageType } from '../types';

const defaultCurrencies = [
  { name: 'US Dollar', code: 'USD', symbol: '$', rate: 1 },
  { name: 'Euro', code: 'EUR', symbol: '€', rate: 0.897597 },
  { name: 'British Pound', code: 'GBP', symbol: '£', rate: 0.81755 },
  { name: 'Russian Ruble', code: 'RUB', symbol: '₽', rate: 63.461993 },
];

export const seed = async () => {
  try {
    Currency.find({}, (err, currencies) => {
      if (err) {
        console.error(err);
        return;
      }

      defaultCurrencies.forEach((curr) => {
        if (!currencies.find((c) => (c.code = curr.code))) {
          Currency.create(curr);
        }
      });

      // Currency.find({}, (_, docs) => console.log(docs));
    });
  } catch (error) {
    console.error(`${ConsoleMessageType.currenciesSeedError}: ${error.message}`);
  }
};
