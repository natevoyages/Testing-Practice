import { reverseString } from './reverse-string';
test('reverse string short', () => {
  expect(reverseString('dog')).toBe('god');
});

test('reverse string longer', () => {
  expect(reverseString('brandon')).toBe('nodnarb');
});
