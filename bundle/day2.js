"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celcius = 60;
const fahrenheit = celcius * (9 / 5) + 32;
console.log(fahrenheit);
//
let number1 = 25;
if (number1 % 2 === 0) {
    console.log(number1 + " is odd.");
}
else {
    console.log(number1 + " is even.");
}
// ternary
console.log(number1 % 2 === 0 ? "odd" : "even");
let number2 = 2;
if (number2 % 2 === 0) {
    console.log(number2 + " is odd.");
}
else {
    console.log(number2 + " is even.");
}
//
const numPrime = 7;
if (numPrime % 2 === 1) {
    console.log(numPrime + " is a prime number.");
}
else {
    console.log(numPrime + " is not a prime number");
}
//
const np = 7;
let isPrime = true;
for (let i = 2; i < np; i++) {
    if (np % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime);
//
let sum = 0;
let n = 5;
let message = "";
for (let i = 1; i <= n; i++) {
    sum += i;
    message += i + (i !== n ? " + " : "");
}
console.log(sum);
console.log(message + " = " + sum);
// Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 4 x 3 x 2 x 1 = 720
