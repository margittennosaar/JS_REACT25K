/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/

const button = document.getElementById("button");
const counter = document.getElementById("counter");

let count = 0;

button.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
