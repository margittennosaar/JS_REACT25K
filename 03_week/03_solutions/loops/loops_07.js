/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/

function sumAndAverage() {
    let sum = 0, min = Infinity, max = -Infinity;
    for (let i = 0; i < 10; i++) {
        let num = parseFloat(prompt("Enter a number:"));
        sum += num;
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }
    console.log(`Sum: ${sum}, Average: ${sum / 10}, Min: ${min}, Max: ${max}`);
}

sumAndAverage(); 