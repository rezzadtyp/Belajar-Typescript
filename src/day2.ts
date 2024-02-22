const celcius: number = 60;
const fahrenheit: number = celcius * (9 / 5) + 32;

console.log(fahrenheit);

//

let number1: number = 25;

if (number1 % 2 === 0) {
  console.log(number1 + " is odd.");
} else {
  console.log(number1 + " is even.");
}

// ternary
console.log(number1 % 2 === 0 ? "odd" : "even");

let number2: number = 2;

if (number2 % 2 === 0) {
  console.log(number2 + " is odd.");
} else {
  console.log(number2 + " is even.");
}

//

const numPrime: number = 7;
if (numPrime % 2 === 1) {
  console.log(numPrime + " is a prime number.");
} else {
  console.log(numPrime + " is not a prime number");
}

//

const np: number = 7;
let isPrime: boolean = true;

for (let i = 2; i < np; i++) {
  if (np % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime);

//

let sum: number = 0;
let n: number = 5;
let message: string = "";

for (let i = 1; i <= n; i++) {
  sum += i;

  message += i + (i !== n ? " + " : "");
}

console.log(sum);
console.log(message + " = " + sum);

// Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 4 x 3 x 2 x 1 = 720

