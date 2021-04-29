import { Currency } from '../models';

const defaultCurrencies = [
  { name: 'US Dollar', code: 'USD', symbol: '$', rate: 1 },
  { name: 'Euro', code: 'EUR', symbol: '€', rate: 0.897597 },
  { name: 'British Pound', code: 'GBP', symbol: '£', rate: 0.81755 },
  { name: 'Russian Ruble', code: 'RUB', symbol: '₽', rate: 63.461993 },
];

export const seed = async () => {
  Currency.find({}, (err, currencies) => {
    if (err) {
      console.error(err);
      return;
    }

    defaultCurrencies.forEach((curr) => {
      if (!currencies.find((c) => (c.name = curr.name))) {
        Currency.create(curr);
      }
    });

    console.log(Currency.find({}, (_, docs) => console.log(docs)));
  });
};
