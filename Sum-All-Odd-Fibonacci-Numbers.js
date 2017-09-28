/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/ 
// recursive example
// https://www.thepolyglotdeveloper.com/2015/01/fibonacci-sequence-printed-javascript/
// function fibonacci(num) {
//     if (num <= 1) return 1;
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

//0 1 1 2 3 5 8 13 21

'strict';

function sumFibs(num) {
    var previousNumber = 0;
    var currentNumber = 1;
    var result = 0;

    do {

        //test if the current number is odd - if so add it to the result
        if (currentNumber % 2 !== 0) {
            result += currentNumber;
        }

        //increment fibonacci sequence
        currentNumber =  previousNumber + currentNumber;
        previousNumber = currentNumber - previousNumber;

        // test if we reached the input number. If no go back and increment fibonacci
    } while (currentNumber <= num)

    return result;
}



console.log(sumFibs(1)); // should return a number.
console.log(sumFibs(1000)); // should return 1785.
console.log(sumFibs(4000000)); // should return 4613732.
console.log(sumFibs(4)); // should return 5.
console.log(sumFibs(75024)); // should return 60696.
console.log(sumFibs(75025)); // should return 135721.