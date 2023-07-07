import { caesarCipher } from "./caesar-cipher";

test('ciphers lower', () => expect(caesarCipher('abc', 1)).toBe('bcd'));

test('ciphers upper', () => expect(caesarCipher('ABC', 1)).toBe('BCD'));

test('wrapping lower', () => expect(caesarCipher('z', 1)).toBe('a'));

test('wrapping upper', () => expect(caesarCipher('Z', 1)).toBe('A'));

test('return punctuation', () => expect(caesarCipher('.', 1)).toBe('.'));

test('test capitalization', () => expect(caesarCipher('John', 5)).toBe('Otms'));