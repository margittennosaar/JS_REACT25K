/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

function countEvenNumbers() {
    let count = 0;
    for (let i = 0; i < 20; i++) {
        let num = parseInt(prompt("Enter a number:"));
        if (num % 2 === 0) count++;
    }
    console.log(`Total even numbers: ${count}`);
}

countEvenNumbers();