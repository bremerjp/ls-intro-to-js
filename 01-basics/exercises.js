// 01

let myName = "Jacob" + " " + "Bremer";
console.log(myName);

//02

let number = 4936;
let ones = number % 10; //
number = (number - ones) / 10;
let tens = number % 10;
number = (number - tens) / 10;
let hundreds = number % 10;
number = (number - hundreds) / 10;
let thousands = number % 10;

console.log(
  `Thousands: ${thousands}, Hundreds: ${hundreds}, Tens: ${tens}, Ones: ${ones}`
);

/*
03

String
Boolean
Number
Number
Undefined
Object


04

This code logs '510' becuase the 10 is implicitly coerced into a String data type during string concatenation. 

*/

//05

console.log(Number("5") + 10);

//06

console.log(`The value of 5 + 15 is ${Number("5") + 10}.`);

//07

// There will not be an error, this will return undefined.

//08

let names = ["asta", "butterscotch", "pudding", "neptune", "darwin"];

//09

let pets = {
  asta: "dog",
  butterscotch: "cat",
  pudding: "cat",
  neptune: "fish",
  darwin: "lizard",
};

//10

// false

//11

//  3

//12

//true
