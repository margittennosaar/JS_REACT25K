/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */

function calculateAverageUntilZero() {
    let sum = 0, count = 0;
    while (true) {
        let num = parseFloat(prompt("Enter a number (0 to stop):"));
        if (num === 0) break;
        sum += num;
        count++;
    }
    console.log(`Average: ${sum / count}`);
}

calculateAverageUntilZero();