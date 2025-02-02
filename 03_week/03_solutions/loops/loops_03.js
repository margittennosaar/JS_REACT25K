/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/

function calculateAverageSpeed() {
    while (true) {
        let distance = parseFloat(prompt("Enter distance in km (0 to stop):"));
        if (distance === 0) break;
        let time = parseFloat(prompt("Enter time in hours:"));
        console.log(`Your speed was ${distance / time} km/h`);
    }
}

calculateAverageSpeed(); 