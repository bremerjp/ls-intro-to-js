//01

let rlSync = require("readline-sync");
let age = Number(rlSync.question("How old are you?\n"));

console.log(`You are ${age} years old.`);

for (let years = 10; years < 40; years += 10) {
  console.log(`In ${years} years, you will be ${age + years} years old.`);
}

//02

function factorial(n) {
  let result = 1;
  for (let counter = n; counter > 0; counter -= 1) {
    result *= counter;
  }
  return result;
}

console.log(factorial(1)); // => 1
console.log(factorial(2)); // => 2
console.log(factorial(3)); // => 6
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
console.log(factorial(6)); // => 720
console.log(factorial(7)); // => 5040
console.log(factorial(8));

//03

//The conditional is a variable declaration that always evaluates to true.

//04 This does not produce an error. The variable gets incremented inside the loop block.

//05

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log(
  "It took " + String(tries) + " tries to get a number greater than 2"
);

//06

function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(1)); // => 1
console.log(factorial(2)); // => 2
console.log(factorial(3)); // => 6
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
console.log(factorial(6)); // => 720
console.log(factorial(7)); // => 5040
console.log(factorial(8));
