let age = 31;

console.log(`You are ${age} years old.`)
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);

//3. You will get an error because foo is not available for use outside the block.
//4. After logging Victor 3 times, the program will error out because a constant cannot be changed after being defined
//5. The program will log bar. The second variable declaration inside the block is not accessible by the log statement. 
//6. There will not be an error as the second constant created is within its own scope.