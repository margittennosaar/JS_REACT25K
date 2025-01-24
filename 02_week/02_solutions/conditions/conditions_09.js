/* 
Write a function named canEnterEvent:
Take two parameters: age and hasID.
If age is 18 or older AND hasID is true, return "You can enter the event."
Otherwise, return "You cannot enter."
Call the function with different combinations of age and hasID. 
*/

function canEnterEvent(age, hasID) {
  return age >= 18 && hasID;
}

console.log(canEnterEvent(18, true)); // "You can enter the event."
console.log(canEnterEvent(17, true)); // "You cannot enter."
console.log(canEnterEvent(18, false)); // "You cannot enter."
console.log(canEnterEvent(17, false)); // "You cannot enter."
