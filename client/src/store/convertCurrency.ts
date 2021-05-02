// Performance issues
// function beutify(n: number): number {
//   return n < 30 || (n % 10 === 0 && n % 3 === 0)
//     ? n
//     : beutify(Math.round(n / 10) * 10);
// }

const beutifyStartDigit = 2;

function numberToStringArray(n: number): string[] {
  return n.toString().split("");
}

function twoIntegralsDenomintor(digitsNumber: number): number {
  return 10 ** (digitsNumber - beutifyStartDigit);
}

function roundFractional(n: number, range = 1) {
  return Math.round(n / 10 ** range) * 10 ** range;
}

// Make the number look goooood ;-)
function beautify(n: number): number {
  // handle negative preset value
  if (n < 0) return n * -1;

  const digits = numberToStringArray(n);

  // handle tiny preset value
  if (digits.length < 2) return n;

  // handle small preset value
  if (digits.length < 3) {
    return roundFractional(n, 2) ? 50 : roundFractional(n, 2);
  } else {
    // handle large preset value

    const denominator = twoIntegralsDenomintor(digits.length);
    const rounded = Math.round(n / denominator);

    return rounded % 5 === 0
      ? rounded * denominator
      : roundFractional(rounded) * denominator;
  }
}

function convertCurrency(value: number, rate: number): string {
  const result = rate === 1 ? value : beautify(Math.round(value * rate));
  return new Intl.NumberFormat("en-US").format(result);
}

export default convertCurrency;
