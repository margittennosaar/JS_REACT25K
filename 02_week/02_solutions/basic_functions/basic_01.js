/* Create a function named add that:
Takes two parameters, a and b.
Returns the sum of a and b.
Call the function with the arguments 10 and 5.
Print the result using console.log(). 

Bonus: Call the function multiple times with different arguments and print all the results.
*/

// function add(a, b) {
//   return a + b;
// }

const add = (a, b) => {
  return a + b;
};

let result = add(10, 5);
console.log(result);

console.log("Added: ", add(4, 5)); // 9
console.log("Added: ", add(6, 2)); // 8
console.log("Added: ", add(8, 5)); // 13
console.log("Added: ", add(1, 2)); // 3
console.log("Added: ", add(2, 5)); // 7
console.log("Added: ", add(1, 1)); // 2
console.log("Added: ", add(9, 9)); // 18
console.log("Added: ", add(7, 7)); // 14
