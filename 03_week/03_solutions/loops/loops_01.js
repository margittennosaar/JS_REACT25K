/* 
Write a function named logOddNumbers:
- Use a loop to output all odd, positive numbers less than 100, starting from 1.
Example output in the console: 1, 3, 5, 7, ..., 99. 
*/


// Using for loop
function logOddNumbers() {
    for (let i = 1; i < 100; i += 2) {
        console.log(i);
    }
}

// Using while loop
function logOddNumbersWhile() {
    let i = 1;
    while (i < 100) {
        console.log(i);
        i += 2;
    }
}

logOddNumbers();
logOddNumbersWhile();