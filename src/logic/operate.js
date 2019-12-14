/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
const Big = require('big.js');

export default function operate(numberOne, numberTwo, operation) {
  try {
    var number1 = Big(numberOne);
    var number2 = Big(numberTwo);
  } catch (e) {
    return 0;
  }

  switch (operation) {
    case '+':
      return number1.plus(number2).toString();
    case '-':
      return number1.minus(number2).toString();
    case 'x':
      return number1.times(number2).toString();
    case '÷':
      if (numberTwo === '0') { alert('Division by Zero unauthorized'); } else { return number1.div(number2).toString(); }
      break;
    case '%':
      return number1.mod(number2).toString();
    default:
      alert(`operation '${operation}' not available `);
  }
}
