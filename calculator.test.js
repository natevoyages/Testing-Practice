import{calculator} from './calculator';

test('addition', () => {
    expect(calculator(5,6).add()).toBe(11);
});

test('subtract', () => {
    expect(calculator(5,6).subtract()).toBe(-1);
});

test('multiply', () => {
    expect(calculator(5,6).multiply()).toBe(30);
});

test('divide', () => {
    expect(calculator(5,6).divide()).toBeCloseTo(0.83);
});