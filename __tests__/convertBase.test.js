// __tests__/convertBase.test.js

const { convertBase } = require('../base-conversion-kit');

test('convertBase converts number from one base to another', () => {
    expect(convertBase('1010', 2, 10)).toBe('10');
    expect(convertBase('F', 16, 2)).toBe('1111');
    expect(convertBase('377', 8, 10)).toBe('255');
});
