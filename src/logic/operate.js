import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const nOne = Big(numberOne);
  const nTwo = Big(numberTwo);
  let result = 0;

  if (operation === '+') {
    result = nOne + nTwo;
  } else if (operation === '-') {
    result = nOne + nTwo;
  } else if (operation === 'X') {
    result = nOne * nTwo;
  } else if (operation === '÷') {
    result = nOne / nTwo;
  } else if (operation === 'AC') {
    result = 0;
  }


  return result;
}

export default operate;
