// __tests__/convertToBaseN.test.js

const { convertToBaseN } = require('../base-conversion-kit');

test('convertToBaseN converts decimal number to base N', () => {
    expect(convertToBaseN(10, 2)).toBe('1010');
    expect(convertToBaseN(15, 16)).toBe('F');
    expect(convertToBaseN(255, 8)).toBe('377');
});
