let rlSync = require('readline-sync');

let a = rlSync.question('Enter a number');

if (a === '3') {
  console.log("a is 3");
} else if (a === '4') {
  console.log("a is 4");
} else {
  console.log("a is neither 3, nor 4");
}

/*
1. false, true, 3, 3, false, true, false, false, false, true, false, 


4. this will log Product2, Product3, and Product not found! because no break statement was used. 
5. 
if (foo()) {
  return 'bar'
} else {
  return qux();
}

6. "not empty", the array is still truthy even though it is empty.
*/

//7. 

function changeCase(string) {
  if (string.length > 10) {
    console.log(string.toUpperCase());
  } else {
    console.log(string);
  }
}

changeCase('hello world');
changeCase('goodbye');

//8.

function numberRange(num) {
  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else {
    console.log(`${num} is greater than 100`)
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

//9. false, true, 3, false, 3, 3, undefined, null
//10. 5, 7 | 0, 0 | 4, 42 | 3, 42

