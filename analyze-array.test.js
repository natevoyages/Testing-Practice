import {analyzeArrray} from './analyze-array';

test('average', () => expect(analyzeArrray([4,4,4,4]).average).toBeCloseTo(4));

test('average', () => expect(analyzeArrray([4,4,4,4,4]).length).toBe(5));

test('average', () => expect(analyzeArrray([1,2,3,4,-6]).min).toBe(-6));

test('average', () => expect(analyzeArrray([1,2,3,4,-6]).max).toBe(4));