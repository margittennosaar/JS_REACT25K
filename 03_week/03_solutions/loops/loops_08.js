/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/

function findMinMax() {
    let count = parseInt(prompt("How many numbers?"));
    let min = Infinity, max = -Infinity;
    for (let i = 0; i < count; i++) {
        let num = parseFloat(prompt("Enter a number:"));
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }
    console.log(`Smallest: ${min}, Largest: ${max}`);
}

findMinMax();