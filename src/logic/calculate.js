/* eslint-disable no-dupe-keys */
/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-case-declarations */
import operate from './operate';

function calculate(calculatorData, buttonName) {
  let { total, next, operation } = calculatorData;

  switch (buttonName) {
    case '+/-':
      total = -total;
      next = -next;
      operation = buttonName;
      return total;
      break;
    case 'AC':
      total = 0;
      return total;
      break;
    case '.':
      if (next !== false) {
        total = [total, '.', next].join('');
        return total;
        break;
      }
      return total;
    // eslint-disable-next-line no-fallthrough
    default:
      const result = operate(total, next, operation);
      return result;
      break;
  }
}

export default calculate;
