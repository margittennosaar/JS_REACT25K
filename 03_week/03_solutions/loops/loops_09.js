/* 
Write a function named sumFromOneToHundred:
- Use a loop to calculate the sum of all numbers from 1 to 100.
Log the final sum in the console.
*/

function sumFromOneToHundred() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) sum += i;
    console.log(`Sum: ${sum}`);
}

sumFromOneToHundred(); 