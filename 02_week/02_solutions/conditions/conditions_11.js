/* 
Write a function named getDayName:
Take a parameter day.
Use a switch statement to:
Return the name of the day (1 = "Monday", 2 = "Tuesday", etc.).
Use default to return "Invalid day" for invalid values.
Call the function with valid and invalid day numbers. 
*/

function getDayName(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}

console.log(getDayName(1)); // "Monday"
console.log(getDayName(7)); // "Sunday"
console.log(getDayName(8)); // "Invalid day"
