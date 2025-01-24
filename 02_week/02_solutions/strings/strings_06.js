/* Declare two variables: num1 and num2 with values 7 and 5.
Create a string using backticks to say: "The sum of 7 and 5 is 12." by embedding the sum expression directly within the template literal.
Print the resulting string. */

let num1 = 7,
  num2 = 5;

let sumMessage1 = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
let sumMessage2 =
  "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2);

console.log(sumMessage1);
console.log(sumMessage2);
