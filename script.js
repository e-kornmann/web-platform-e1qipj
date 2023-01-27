const input = document.querySelector('#give-number');
const container = document.querySelector('.container');
const leftcolumn = document.querySelector('.leftcol');
const btn = document.querySelector('#fizz-buzz');

const fizzBuzz = (givenNumber) => {
  if (isNaN(givenNumber)) {
    leftcolumn.innerHTML = 'Please provide a valid number';
    return;
  }
  if (givenNumber > 100) {
    leftcolumn.innerHTML =
      givenNumber + '... Please provide a number below 100';
    return;
  }
  if (givenNumber <= 0) {
    leftcolumn.innerHTML = givenNumber + '... provide a positive number';
    return;
  }
  leftcolumn.innerHTML = 'Results<hr>';
  const newArry = Array.from({ length: givenNumber }, (_, i) => i + 1).map(
    (i) => {
      if (i % 15 === 0) {
        return 'FizzBuzz';
      } else if (i % 3 === 0) {
        return 'Fizz';
      } else if (i % 5 === 0) {
        return 'Buzz';
      } else {
        return i;
      }
    }
  );

  for (const el of newArry) {
    const node = document.createElement('div');
    node.classList.add('item');
    node.textContent = el;
    container.appendChild(node);
  }
};

btn.addEventListener('click', () => {
  fizzBuzz(Number(input.value));
});
