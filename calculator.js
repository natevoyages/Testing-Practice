const calculator = () => {
  const subtract = (a, b) => a - b;
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return { subtract, add, multiply, divide };
};

export { calculator };
