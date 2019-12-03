function calculate(calculatorData, buttonName) {
  let { total, next, operation } = calculatorData;

  switch (buttonName) {
    case '+/-':
      total = -total;
      next = -next;
      operation = -operation;
      break;
    default:
      break;
  }

  return { total, next, operation };
}

export default calculate;
