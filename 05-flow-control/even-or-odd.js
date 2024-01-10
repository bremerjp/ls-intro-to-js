function evenOrOdd(num) {
  if (Number.isInteger(num)) {
    if (num % 2 === 0) {
      console.log(`${num} is even`);
    } else  {
      console.log(`${num} is odd`);
    }
  } else {
    console.log('Please enter an integer.')
  }
}

evenOrOdd(5);
evenOrOdd(6);
evenOrOdd(3.1415159265)