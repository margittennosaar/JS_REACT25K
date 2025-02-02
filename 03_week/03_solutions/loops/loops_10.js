/* 
Write a function named countdownTimer:
- Take a number (e.g., 10) as input and simulate a countdown in the console.
Log each number in descending order until 0, and then log: "Time's up!".
 */

function countdownTimer(n) {
    for (let i = n; i >= 0; i--) console.log(i);
    console.log("Time's up!");
}

countdownTimer(5);