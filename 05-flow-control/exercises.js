/*
01

false
true
3
3
false
true
false
false
false
true
false
true
*/

//02

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log("Not an integer");
    return;
  }
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

// 04 Product2, Product3, Product not found! No break statement are included in the switch statement.

//05

// if (foo()) {
//   return "bar";
// } else if (qux()) {
//   return qux();
// }

//06 This outputs Not Empty to the console. The array does not have any elements but it is still truthy.

//07

function toAllCaps(string) {
  if (string.length > 10) {
    console.log(string.toUpperCase());
  } else {
    console.log(string);
    return string;
  }
}

//08

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
