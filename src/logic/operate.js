import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const nOne = Big(numberOne);
  const nTwo = Big(numberTwo);
  let result = 0;

  switch (operation) {
    case '+':
      result = nOne + nTwo;
      break;
    case '-':
      result = nOne - nTwo;
      break;
    case 'AC':
      result = 0;
      break;
    case '÷':
      result = nOne / nTwo;
      break;
    case '%':
      result = nOne % nTwo;
      break;
    case '.':
      result = nOne.nTwo;
      break;
    default:
      break;
  }


  return result;
}

export default operate;
