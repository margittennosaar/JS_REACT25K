/* 
1. Create a variable num and assign it the value 5.67.
2. Use the Math.round() method to round num to the nearest whole number.
3. Use the Math.floor() method to round it down to the nearest whole number.
4. Use the Math.ceil() method to round it up to the nearest whole number.
5. Print the results using console.log() with messages like: "The rounded value is 6." 
*/

function roundNumbers(num) {
  const rounded = Math.round(num);
  const floored = Math.floor(num);
  const ceiled = Math.ceil(num);
  console.log(`The rounded value is ${rounded}.`);
  console.log(`The floored value is ${floored}.`);
  console.log(`The ceiled value is ${ceiled}.`);
}

roundNumbers(5.67);
