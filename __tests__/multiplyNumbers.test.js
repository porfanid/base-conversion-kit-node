// __tests__/multiplyNumbers.test.js

const { multiplyNumbers } = require('../base-conversion-kit');

test('multiplyNumbers multiplies two numbers of the same base', () => {
    expect(multiplyNumbers('10', '20', 10)).toBe('200');
    expect(multiplyNumbers('A', '5', 16)).toBe('32');
    expect(multiplyNumbers('110', '101', 2)).toBe('11110');
});
