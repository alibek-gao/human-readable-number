module.exports = function toReadable (number) {
  const units = {
      1 : "one",
      2 : "two",
      3 : "three",
      4 : "four",
      5 : "five",
      6 : "six",
      7 : "seven",
      8 : 'eight',
      9 : 'nine'
  }

  const teens = {
      10 : "ten",
      11 : "eleven",
      12 : "twelve",
      13 : "thirteen",
      14 : "fourteen",
      15 : "fifteen",
      16 : "sixteen",
      17 : "seventeen",
      18 : "eighteen",
      19 : "nineteen",
  }

  const tens = {
      2 : "twenty",
      3 : "thirty",
      4 : "forty",
      5 : "fifty",
      6 : "sixty",
      7 : "seventy",
      8 : "eighty",
      9 : "ninety",
  }

  const len = number.toString().length;
  if(len === 0 || number === 0) return 'zero';
  let str = '';
  switch (len) {
      case 1: return units[number];
      case 2:
          if(number < 20) {
              return teens[number];
          } else {
              return tens[Math.floor(number/10)] + (number%10 ? ' ' + units[number%10] : '');
          }
      case 3:
          return units[Math.floor(number/100)] + ' hundred' + (number%100 ? ' ' + toReadable(number%100) : '');
  }
}
