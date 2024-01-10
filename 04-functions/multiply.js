function numberPrompt(prompt) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
}

function multiply(num1, num2) {
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
} 

multiply(numberPrompt('Enter the first number: \n'), numberPrompt('Enter the second number: \n'));


// 7. hello will logged but the qux variable will return because it was not given an explicit argument when invocated.
// 8 The third argument is ignored because only 2 parametes were defined. 
// 9. multiply, left, right, product, left, right, product getNumber, prompt, parseFloat, question, left, getNumber, right, getNumber, console, left, right, multiply
// 10. Global: multiply, getNumber, left, right, console, parseFloat, question
//     Local: left, right, product, prompt
// 11. No, the variables on lines 1 and 2 are arguments the function and exist only within the function. They cease to exsist when the funcion stops running. The variables on 10-12 are global variable available in the whole program.
