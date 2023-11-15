// __tests__/subtractNumbers.test.js

const { subtractNumbers } = require('../base-conversion-kit');

test('subtractNumbers subtracts two numbers of the same base', () => {
    expect(subtractNumbers('20', '10', 10)).toBe('10');
    expect(subtractNumbers('15', 'A', 16)).toBe('B');
    expect(() => subtractNumbers('101', '110', 2)).toThrow('Subtraction would result in a negative number.');
});
