import { caesarCipher } from "./caesar-cipher";

test('ciphers', () => expect(caesarCipher('abc', 1)).toBe('bcd'));

test('wrapping', () => expect(caesarCipher('z', 1)).toBe('a'));