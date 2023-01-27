const inputrmn = document.querySelector('#number');
const container = document.querySelector('.container');
const leftcolumn = document.querySelector('.leftcol');
const btnrmn = document.querySelector('#convert');

const numeralCodes = [
  ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
];
const romanNumeralGenerator = (num) => {
  if (Number.isNaN(num) || num <= 0 || num > 3000) {
    return 'error';
  }
  let numeral = '';
  leftcolumn.innerHTML = 'Results<hr>';
  const digits = num.toString().split('').reverse();
  for (let i = 0; i < digits.length; i++) {
    numeral = numeralCodes[i][parseInt(digits[i], 10)] + numeral;
  }
  return numeral;
};

btnrmn.addEventListener('click', () => {
  const node = romanNumeralGenerator(Number(inputrmn.value));
  container.textContent = node;
});
