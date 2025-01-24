/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/

function canVote(age) {
  return age >= 18;
}

console.log(canVote(18)); // true
console.log(canVote(17)); // false
