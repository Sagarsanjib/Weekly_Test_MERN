
// program to print the nth fibonacci number. take user input.
const number = parseInt (prompt ('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

Console.log ('Fibonacci Series:') ;

for (let i = 1; i <= number; i++) {
      console.log(n1) ;
      nextTerm = n1+ n2;
      n2 = nextTerm;
}

// program to print prime all prime numbers in range 1 to n. take n from the user.

// take input from the user
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
