
const add = (first, last) => first + last;

const getFull = (first, last) => first + ' ' + last;

const multiply = (a, b) => a * b;

const addR = add('ba', 'zar');
const myName = getFull('Fahad', 'Abdul Aziz');
const result = multiply(12, 5);

console.log(addR, myName, result);

//No parameter arrow function
const getPie = () => 3.14;

//One parameter
const doubleIt = (num) => num * 2;

//One parameter Simple function
const fiveTimes = num => num * 5;

//Multiline Arrow Function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;


//If you want to return something, use the return. 
//Note: Multiple of line এর কোড হলে বাই ডিফল্ট কোড রিটার্ন হবে না। এই জন্য রিটার্ন লিখতে হবে।
}

//Things to Learn In this module:
/*
1. Oneparameter simple function
2. Multiline arrow function

*/