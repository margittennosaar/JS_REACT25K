/* Declare two variables: num1 and num2 with values 7 and 5.
Create a string using backticks to say: "The sum of 7 and 5 is 12." by embedding the sum expression directly within the template literal.
Print the resulting string. */

const num1 = 7;
const num2 = 5;
const sum = num1 + num2;
const result = `The sum of ${num1} and ${num2} is ${sum}.`;
console.log(result);
