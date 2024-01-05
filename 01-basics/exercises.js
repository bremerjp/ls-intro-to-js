// console.log('Jacob' + ' ' + 'Bremer');

let num = 4936;
let ones = num % 10;
num = (num - ones) / 10;
let tens = num % 10;
num = (num - tens) / 10;
let hundreds = num % 10;
let thousands = (num - hundreds) / 10;

console.log(`Thousands: ${thousands}, Hundreds: ${hundreds}, Tens: ${tens}, Ones: ${ones}`);

 /*
 3. string, boolean, number, number, undefined, object
 4. The 10 in coerced into a string because there already one string present in the expression.
 */

 console.log(Number('5') + 10);

 console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);


 //7. No, the console will return undefined.

 let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

 let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
 }

 /*
 10. false
 11. 3
 12. true
 */