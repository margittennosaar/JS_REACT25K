# **Handling User input in JavaScript**

JavaScript allows you to **capture, validate, and process user input dynamically** from forms, input fields, and other interactive elements. This is essential for creating **interactive web applications**.

## **Retrieving user input**

To get user input, select the input field and access its `.value` using JavaScript.

### Example: Getting Input from a Text Field

```html
<input type="text" id="username" placeholder="Enter your name" />
<button id="submitBtn">Submit</button>
<p id="output"></p>
```

```js
function displayUsername() {
  const inputValue = document.getElementById("username").value;
  document.getElementById("output").textContent = "User entered: " + inputValue;
}

document.getElementById("submitBtn").addEventListener("click", displayUsername);
```

When the button is clicked, the user’s input is **retrieved and logged** to the console.

## Listening for user input in Real-Time

Instead of waiting for a button click, you can **detect changes while the user is typing**.

### Example: Live Input Tracking

```html
<input type="text" id="liveInput" placeholder="Start typing..." />
<p id="liveOutput"></p>
```

```js
function showLiveText(event) {
  document.getElementById("liveOutput").textContent =
    "You typed: " + event.target.value;
}

document.getElementById("liveInput").addEventListener("input", showLiveText);
```

This updates the `<p>` text **instantly** as the user types.

## **Handling Form submission in JavaScript**

Forms usually **refresh the page** when submitted. JavaScript can **prevent this default behavior** and process the data dynamically.

### Example: Handling a Form submit event

```html
<form id="userForm">
  <input type="text" id="name" placeholder="Your Name" />
  <input type="email" id="email" placeholder="Your Email" />
  <button type="submit">Submit</button>
</form>
<p id="formOutput"></p>
```

```js
function processForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  document.getElementById(
    "formOutput"
  ).textContent = `Submitted Name: ${name}, Email: ${email}`;
}

document.getElementById("userForm").addEventListener("submit", processForm);
```

Now, the form **submits data without refreshing** the page.

## Validating user input in JavaScript

User input should always be **validated** before using it.

### Common JavaScript validation checks

| **Validation** | **Example Condition**       |
| -------------- | --------------------------- |
| Required field | `if (input === '')`         |
| Minimum length | `if (name.length < 3)`      |
| Email format   | `if (!email.includes('@'))` |
| Numbers only   | `if (isNaN(value))`         |

### **Example: Simple Form Validation**

```html
<form id="signupForm">
  <input type="text" id="username" placeholder="Username (min 3 chars)" />
  <input type="email" id="userEmail" placeholder="Enter your email" />
  <button type="submit">Register</button>
</form>
<p id="errorMessage"></p>
```

```js
function validateForm(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("userEmail").value;
  const errorMessage = document.getElementById("errorMessage");

  if (username.length < 3) {
    errorMessage.textContent = "Username must be at least 3 characters long!";
    return;
  }

  if (!email.includes("@")) {
    errorMessage.textContent = "Please enter a valid email!";
    return;
  }

  errorMessage.textContent = "User Registered Successfully!";
}

document.getElementById("signupForm").addEventListener("submit", validateForm);
```

Error messages update dynamically without refreshing.

## Handling checkboxes and radio buttons

### Example: Checkbox validation

```html
<input type="checkbox" id="agree" /> I agree to the terms
<button id="submitCheckbox">Submit</button>
<p id="checkboxOutput"></p>
```

```js
function checkAgreement() {
  const isChecked = document.getElementById("agree").checked;
  document.getElementById("checkboxOutput").textContent = isChecked
    ? "User agreed"
    : "User did not agree";
}

document
  .getElementById("submitCheckbox")
  .addEventListener("click", checkAgreement);
```

### **Example: Handling Radio Button Selection**

```html
<label><input type="radio" name="color" value="Red" /> Red</label>
<label><input type="radio" name="color" value="Blue" /> Blue</label>
<label><input type="radio" name="color" value="Green" /> Green</label>
<button id="submitRadio">Choose Color</button>
<p id="radioOutput"></p>
```

```js
function getSelectedColor() {
  const selectedColor = document.querySelector('input[name="color"]:checked');
  document.getElementById("radioOutput").textContent = selectedColor
    ? "Selected Color: " + selectedColor.value
    : "No color selected";
}

document
  .getElementById("submitRadio").addEventListener("click", getSelectedColor);
```

This gets the **selected radio button’s value**.

## **Handling Dropdown Selections (`<select>`)**

### **Example: Getting the Selected Option**

```html
<select id="city">
  <option value="">Select a city</option>
  <option value="helsinki">Helsinki</option>
  <option value="stockholm">Stockholm</option>
  <option value="oslo">Oslo</option>
</select>
<button id="submitSelect">Select City</button>
<p id="selectOutput"></p>

```

```js 
  function getSelectedCity() {
    const selectedCity = document.getElementById('city').value;
    document.getElementById('selectOutput').textContent = selectedCity ? 'Selected city: ' + selectedCity : 'No city selected';
  }

  document.getElementById('submitSelect').addEventListener('click', getSelectedCity);
```

`.value` gets the **selected option**.

## **Storing and using Input data**

User input can be **stored for later use** using `localStorage`.

### **Example: Saving and loading user data**

```html
<input type="text" id="userNameInput" placeholder="Enter your name">
<button id="saveBtn">Save Name</button>
<button id="loadBtn">Load Name</button>
<p id="displayName"></p>

```

```js
  function saveName() {
    const name = document.getElementById('userNameInput').value;
    localStorage.setItem('savedName', name);
  }

  function loadName() {
    const savedName = localStorage.getItem('savedName');
    document.getElementById('displayName').textContent = savedName ? `Welcome back, ${savedName}!` : 'No name saved.';
  }

  document.getElementById('saveBtn').addEventListener('click', saveName);
  document.getElementById('loadBtn').addEventListener('click', loadName);
```

**`localStorage.setItem()`** saves data **even after page refresh**.

## Notes

- **Always validate user input** before using or storing it.
- **Use JavaScript event listeners** to handle form submissions and input changes.
- **Prevent form submission default behavior** using `event.preventDefault()`.
- **Use `localStorage`** to save user data across page reloads.
- **Use `console.log()`** to test and debug user input.