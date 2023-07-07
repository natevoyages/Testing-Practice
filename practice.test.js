import { capitalize, reverseString } from './practice';

test('capitalize', () => {
  expect(capitalize('brian')).toBe('Brian');
});

test('reverse string short', () => {
  expect(reverseString('dog')).toBe('god');
});

test('reverse string longer', () => {
  expect(reverseString('brandon')).toBe('nodnarb');
});
