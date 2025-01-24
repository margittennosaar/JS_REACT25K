/* Create a function named replaceWord that:
Takes three parameters, sentence, oldWord, and newWord.
Returns the sentence with oldWord replaced by newWord.
Call the function with the sentence "I like apples.", oldWord as "apples", and newWord as "bananas".
Print the result using console.log(). 

*/

const replaceWord = (sentence, oldWord, newWord) => {
  return sentence.replace(oldWord, newWord);
};

console.log(replaceWord("I like apples.", "apples", "bananas"));
