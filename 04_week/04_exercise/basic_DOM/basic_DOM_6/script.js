/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name.value === "" || email.value === "") {
    alert("Please fill in all fields");
  } else {
    alert("Form submitted");
  }
});
