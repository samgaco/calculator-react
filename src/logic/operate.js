import Big from 'big';

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
      if (nTwo !== 0) {
        result = nOne / nTwo;
      } else {
        result = 'ERROR: not possible to divide by 0';
      }
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
