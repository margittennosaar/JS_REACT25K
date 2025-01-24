/* 
Create two variables:
numString1 with the value "42".
numString2 with the value "3.14".
Use parseInt() to convert numString1 into an integer.
Use parseFloat() to convert numString2 into a floating-point number.
Print the results using console.log() with messages:
    "The integer is 42."
    "The floating-point number is 3.14."
*/

let numString1 = "42";
let numString2 = "3.14";

let integer1 = parseInt(numString1);
let integer2 = Number.parseInt(numString1);

let float1 = parseFloat(numString2);
let float2 = Number.parseFloat(numString2);

console.log("The integrer is " + integer1 + ".");
console.log("The number used for the integrer was:", integer1);

console.log("The floating-point number is " + float1 + ".");
