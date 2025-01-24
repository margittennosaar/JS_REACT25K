/* 
Write a function named checkForFox:
Take a boolean parameter hasFox.
If hasFox is true, return "You have a fox as a pet!"
Otherwise, return "No fox detected!"
Call the function with true and false and print the result. 
*/

const checkForFox = (hasFox) => {
  if (hasFox) {
    return "You have a fox as a pet!";
  } else {
    return "No fox detected!";
  }
};

console.log(checkForFox(true));
console.log(checkForFox(false));
