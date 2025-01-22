/* Create a variable longText and assign it the value "The quick brown fox jumps over the lazy dog."
Use .slice() to extract "quick brown fox".
Print the sliced portion using console.log().
Example output:
"Sliced text: quick brown fox" */

let longText = "The quick brown fox jumps over the lazy dog.";

let slicedText1 = longText.slice(4, 19);

console.log("Sliced text (hard-coded): " + slicedText1);
