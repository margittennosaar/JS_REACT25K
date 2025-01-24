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

function convertNumbers(numString1, numString2) {
  const num1 = parseInt(numString1);
  const num2 = parseFloat(numString2);
  console.log(`The integer is ${num1}.`);
  console.log(`The floating-point number is ${num2}.`);
}

convertNumbers("42", "3.14");
