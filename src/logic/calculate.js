import operate from './operate';

function calculate(calculatorData, buttonName) {
  let { total, next, operation } = calculatorData;

  switch (buttonName) {
    case '+/-':
      total = -total;
      next = -next;
      operation = buttonName;
      break;
    default:
      total = operate(total, next, buttonName);
      break;
  }

  return { total, next, operation };
}

export default calculate;
