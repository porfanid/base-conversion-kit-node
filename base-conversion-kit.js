function convertToBaseN(decimalNumber, toBase) {
    if (decimalNumber === 0) {
        return "0";
    }

    let result = "";
    while (decimalNumber > 0) {
        const remainder = decimalNumber % toBase;
        if (remainder < 10) {
            result = remainder.toString() + result;
        } else {
            result = String.fromCharCode('A'.charCodeAt(0) + remainder - 10) + result;
        }
        decimalNumber = Math.floor(decimalNumber / toBase);
    }

    return result;
}

function convertBase(number, fromBase, toBase) {
    if (!(2 <= fromBase && fromBase <= 36) || !(2 <= toBase && toBase <= 36)) {
        throw new Error("Base must be between 2 and 36 inclusive.");
    }

    const decimalNumber = parseInt(String(number), fromBase);
    return convertToBaseN(decimalNumber, toBase);
}

function addNumbers(a, b, base) {
    const decimalA = parseInt(String(a), base);
    const decimalB = parseInt(String(b), base);

    const result = decimalA + decimalB;

    return convertToBaseN(result, base);
}

function subtractNumbers(a, b, base) {
    const decimalA = parseInt(String(a), base);
    const decimalB = parseInt(String(b), base);

    if (decimalA < decimalB) {
        throw new Error("Subtraction would result in a negative number.");
    }

    const result = decimalA - decimalB;

    return convertToBaseN(result, base);
}

function multiplyNumbers(num1, num2, base) {
    const intNum1 = parseInt(num1, base);
    const intNum2 = parseInt(num2, base);

    const result = intNum1 * intNum2;

    return convertToBaseN(result, base);
}

module.exports = {
    convertToBaseN,
    convertBase,
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
};
