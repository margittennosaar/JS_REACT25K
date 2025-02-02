/* 
Write a function named validatePassword:
- Use a loop to allow the user to input a password.
- If the password is "correct123", log: "Access granted!" and exit the loop.
- If incorrect, prompt the user again with: "Try again!".
 */

function validatePassword() {
    while (true) {
        let pass = prompt("Enter password:");
        if (pass === "correct123") {
            console.log("Access granted!");
            break;
        } else {
            console.log("Try again!");
        }
    }
}

validatePassword()
