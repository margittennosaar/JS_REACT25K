/* Create a variable sentence and assign it the value "Learning JavaScript is fun!".
Use .substring() to extract the word "JavaScript" from the sentence.
Print the extracted word using console.log().
Example output:
"Extracted word: JavaScript" */

const sentence = "Learning JavaScript is fun!";
const extractedWord = sentence.substring(11, 19);
console.log(`Extracted word: ${extractedWord}`);
