import  { add }  from '../src/add';
import { describe, test, expect } from '@jest/globals';
describe('add function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });
});