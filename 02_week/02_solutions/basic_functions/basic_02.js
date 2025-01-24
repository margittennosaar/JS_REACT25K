/* Create a function named isEven that:
Takes one parameter, num.
Returns true if num is even, otherwise returns false.
Call the function with the arguments 4 and 7.
Print the results using console.log().

Bonus: Modify the function to use implicit return. 
*/

const isEven = (num) => {
  const result = num % 2;
  console.log("Result: ", result);
  return num % 2 === 0;
};

console.log(isEven(4)); // true
console.log(isEven(7)); // false
