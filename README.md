# Base Conversion Kit

[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/porfanid)

The Base Conversion Kit is a JavaScript package designed to simplify number operations across different bases. Whether you're working with binary, octal, decimal, or hexadecimal numbers, this package provides convenient functions for conversions and basic arithmetic operations.

## Installation

You can install the Base Conversion Kit using `npm`:

```bash
npm install base-conversion-kit
```

## Usage
### Converting Numbers

The package offers a flexible function for converting numbers from any base to another:
```javascript
const { convertToBaseN, convertBase } = require('base-conversion-kit');

// Convert a decimal number to binary
const binaryResult = convertToBaseN(42, 2);
console.log(`Binary representation: ${binaryResult}`);

// Convert a hexadecimal number to octal
const octalResult = convertBase("1A", 8, 16);
console.log(`Octal representation: ${octalResult}`);
```

### Performing Arithmetic Operations

Performing arithmetic operations on numbers from different bases is seamless:

```javascript
const { multiplyNumbers, addNumbers, subtractNumbers } = require('base-conversion-kit');

// Multiply two binary numbers
const resultBinary = multiplyNumbers("101", "110", 2);
console.log(`Binary multiplication result: ${resultBinary}`);

// Add two decimal numbers
const resultAddition = addNumbers("15", "7", 10);
console.log(`Decimal addition result: ${resultAddition}`);

// Subtract two hexadecimal numbers
const resultSubtraction = subtractNumbers("1A", "B", 16);
console.log(`Hexadecimal subtraction result: ${resultSubtraction}`);
```


## Examples

### Example 1: Adding Binary Numbers

```javascript
const { addNumbers } = require('base-conversion-kit');

const result = addNumbers("101", "110", 2);
console.log(`Binary addition result: ${result}`);
```


### Example 2: Converting and Adding

```javascript
const { convertToBaseN, addNumbers } = require('base-conversion-kit');

// Convert decimal numbers to binary and add
const binarySum = addNumbers(
    convertToBaseN(10, 2),
    convertToBaseN(5, 2),
    2
);
console.log(`Binary sum: ${binarySum}`);
```

## Contributing

Feel free to contribute to the development of the Base Conversion Kit. If you encounter issues, have suggestions, or want to add features, please submit a pull request or open an issue on the [GitHub repository](https://github.com/porfanid/base-conversion-kit-node).

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/porfanid/base-conversion-kit-node/blob/master/LICENSE) file for details.