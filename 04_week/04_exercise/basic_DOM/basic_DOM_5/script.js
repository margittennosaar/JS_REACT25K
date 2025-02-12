/*
Create an HTML file with:
- A <button> to change the background color.
- A <input> field for users to enter a color.
- A <p> element where the text color changes based on the input.

Write JavaScript to:
- Change the background color to a random color when the button is clicked.
- Update the paragraph’s text color to match the user’s input valu
*/

const colorChangeBtn = document.getElementById("colorChangeBtn");
const colorInput = document.getElementById("colorInput");
const colorText = document.getElementById("colorText");

const randomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

colorChangeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomHexColor();
});
