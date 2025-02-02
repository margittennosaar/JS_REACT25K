/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

function askToContinue() {
    let sum = 0, count = 0;
    do {
        let num = parseFloat(prompt("Enter a number:"));
        sum += num;
        count++;
    } while (prompt("Do you want to continue? (y/n)").toLowerCase() === "y");
    console.log(`Average: ${sum / count}`);
}

askToContinue();