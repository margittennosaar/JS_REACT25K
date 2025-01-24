/* Create a function named roundNumber that:
Takes two parameters, num and precision.
Returns the number rounded to the specified precision (number of decimal places).
Call the function with 19.56789 and 2.
Print the result using console.log().

Hint: Use .toFixed().

*/

const roundNumber = (num, precision = 2) => {
  return Number(num.toFixed(precision));
};

console.log(roundNumber(19.56789, 5));
