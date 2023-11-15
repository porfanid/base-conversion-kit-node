// __tests__/addNumbers.test.js

const { addNumbers } = require('../base-conversion-kit');

test('addNumbers adds two numbers of the same base', () => {
    expect(addNumbers('10', '20', 10)).toBe('30');
    expect(addNumbers('A', '5', 16)).toBe('F');
    expect(addNumbers('110', '101', 2)).toBe('1011');
});
