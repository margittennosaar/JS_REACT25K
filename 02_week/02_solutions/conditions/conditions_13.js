/* 
Write a function named planAdventure:
Take three parameters: isWeekend, isSunny, and likesFoxes.
Use logical operators:
If it’s the weekend AND sunny AND likes foxes, return "Perfect day for a fox adventure!"
If it’s the weekend OR sunny, return "Good day, but not perfect."
Otherwise, return "Maybe another day."
Call the function with different combinations of conditions. 
*/

function planAdventure(isWeekend, isSunny, likesFoxes) {
  return (isWeekend && isSunny && likesFoxes) || isWeekend || isSunny
    ? "Perfect day for a fox adventure!"
    : "Good day, but not perfect.";
}

console.log(planAdventure(true, true, true)); // "Perfect day for a fox adventure!"
console.log(planAdventure(true, false, true)); // "Perfect day for a fox adventure!"
console.log(planAdventure(false, true, true)); // "Good day, but not perfect."
console.log(planAdventure(false, false, true)); // "Maybe another day."
