/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
*/

const inputField = document.getElementById("inputField");
const displayText = document.getElementById("displayText");

const updateDisplayText = () => {
  displayText.innerText = inputField.value;
};

inputField.addEventListener("input", updateDisplayText);
