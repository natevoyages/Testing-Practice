import { calculator } from './calculator';

test('addition', () => {
  expect(calculator().add(5, 6)).toBe(11);
});

test('subtract', () => {
  expect(calculator().subtract(5, 6)).toBe(-1);
});

test('multiply', () => {
  expect(calculator().multiply(5, 6)).toBe(30);
});

test('divide', () => {
  expect(calculator().divide(5, 6)).toBeCloseTo(0.83);
});
