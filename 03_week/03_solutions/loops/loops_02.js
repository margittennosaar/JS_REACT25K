/* 
Write a function named logEvenNumbers:
- Use a loop to display all even numbers less than 100 in the pattern: 2, 98, 4, 96, ..., 50.
Display all numbers in a single line in the console.
*/

//  Using for loop
function logEvenNumbers() {
    let result = "";
    for (let i = 2, j = 98; i < j; i += 2, j -= 2) {
        result += `${i}, ${j}, `;
    }
    result += "50"; // Manually add 50 as the last number
    console.log(result);
}

logEvenNumbers();

