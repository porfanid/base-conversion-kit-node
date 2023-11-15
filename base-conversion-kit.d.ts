declare module 'base-conversion-kit' {
    export function convertToBaseN(decimalNumber: number, toBase: number): string;
    export function convertBase(number: string, fromBase: number, toBase: number): string;
    export function addNumbers(a: string, b: string, base: number): string;
    export function subtractNumbers(a: string, b: string, base: number): string;
    export function multiplyNumbers(num1: string, num2: string, base: number): string;
    // You can add other declarations as needed

    // If your module has a default export, you can declare it like this:
    // const baseConversionKit: {
    //   convertToBaseN: (decimalNumber: number, toBase: number) => string;
    //   // ... other functions
    // };
    // export default baseConversionKit;
}
