/* 
1. Create three variables: a = 12, b = 7, and c = 20.
2. Use the Math.max() method to find the largest number among a, b, and c.
3. Use the Math.min() method to find the smallest number among them.
4. Print the results using console.log() with messages like:
"The largest number is 20."
"The smallest number is 7." 

*/

function findLargestAndSmallest(a, b, c) {
  const largest = Math.max(a, b, c);
  const smallest = Math.min(a, b, c);
  console.log(`The largest number is ${largest}.`);
  console.log(`The smallest number is ${smallest}.`);
}

findLargestAndSmallest(12, 7, 20);
