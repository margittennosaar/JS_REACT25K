# The Document Object Model (DOM)

The **Document Object Model (DOM)** is a programming interface for web documents. It represents an **HTML page as a structured tree** so that JavaScript can dynamically change the document’s content, structure, and style.

With the DOM, you can:
- Select and modify elements (`text`, `attributes`, `CSS classes`).
- Handle user interactions (`clicks`, `key presses`).
- Add or remove elements dynamically.

## Invoking Functions from HTML

You can call JavaScript functions directly from **HTML elements** using event attributes like `onclick`. This is useful for simple interactions.

```html
<button onclick="showAlert()">Click Me</button>

<script>
  function showAlert() {
    alert('Button clicked!');
  }
</script>
```

When the button is clicked, the `showAlert` function runs, displaying an alert box.

## Invoking Functions from JavaScript

A more flexible and recommended approach is to **attach event listeners in JavaScript** instead of using inline event attributes. This method separates **HTML structure** from **JavaScript behavior**, making the code easier to maintain.

```html
<button id="myButton">Click Me</button>

<script>
  document.getElementById('myButton').addEventListener('click', function () {
    alert('Button clicked!');
  });
</script>
```

**Why use `addEventListener`?**
- Keeps **HTML clean** and **JavaScript organized**.
- Allows **multiple event listeners** on the same element.
- Makes it easier to **remove or update event handlers**.

## Common Event types

JavaScript events help make web pages **interactive** by responding to user actions.

### Mouse Events
| Event       | Description                                           |
| ----------- | ----------------------------------------------------- |
| `click`     | Triggered when an element is clicked.                 |
| `dblclick`  | Triggered when an element is double-clicked.          |
| `mouseover` | Fired when the mouse pointer moves over an element.   |
| `mouseout`  | Fired when the mouse pointer moves out of an element. |
| `mousedown` | Occurs when the mouse button is pressed down.         |
| `mouseup`   | Occurs when the mouse button is released.             |
| `mousemove` | Triggered when the mouse is moved.                    |

### Keyboard Events
| Event      | Description                                                               |
| ---------- | ------------------------------------------------------------------------- |
| `keydown`  | Fired when a key is pressed down.                                         |
| `keyup`    | Occurs when a key is released.                                            |
| `keypress` | Triggered when a key is pressed and released (deprecated, use `keydown`). |

### Form & Window Events
| Event    | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| `change` | Fired when the user modifies an `<input>`, `<select>`, or `<textarea>`. |
| `submit` | Occurs when a form is submitted.                                        |
| `load`   | Fired when the document or a resource finishes loading.                 |
| `resize` | Occurs when the document view is resized.                               |
| `scroll` | Fired when the document view is scrolled.                               |
| `focus`  | Triggered when an element receives focus.                               |
| `blur`   | Fired when an element loses focus.                                      |

Example: Listening for a **keypress event** on an input field:

```js
document.getElementById('nameInput').addEventListener('keydown', function (event) {
  console.log('Key pressed:', event.key);
});
```

## DOM Selectors

DOM selectors allow you to **find and manipulate** HTML elements.

### 1. `getElementById` (Best for Unique Elements)
Selects a **single** element by its `id`. Fast and commonly used.

```js
const element = document.getElementById('myElement');
```

### 2. `getElementsByClassName` (Multiple Elements)
Selects **all elements** with a specific class. Returns a **live HTMLCollection** (like an array but auto-updated).

```js
const elements = document.getElementsByClassName('myClass');
```

### 3. `getElementsByTagName` (Select by Tag)
Selects all elements of a specific **tag name** (e.g., `<div>`, `<p>`, `<span>`).

```js
const elements = document.getElementsByTagName('p');
```

### 4. `querySelector` (CSS Selector, First Match)
Selects the **first** element matching a **CSS selector**.

```js
const firstMatch = document.querySelector('.highlight');
```

### 5. `querySelectorAll` (CSS Selector, All Matches)
Selects **all elements** matching a CSS selector. Returns a **static NodeList** (does not auto-update).

```js
const allMatches = document.querySelectorAll('p.highlight');
```

## **Manipulating Content and Attributes**

Once elements are selected, you can modify their **text, attributes, or HTML content**.

### **InnerText vs. TextContent**
| Property      | What it does                                       |
| ------------- | -------------------------------------------------- |
| `innerText`   | Gets/sets **only the visible text** of an element. |
| `textContent` | Gets/sets **all text**, including hidden content.  |

```js
const element = document.getElementById('example');
element.innerText = 'New visible text';
element.textContent = 'New text, including hidden elements';
```

### **Setting HTML Content with `innerHTML`**
Allows getting/setting HTML inside an element.

```js
element.innerHTML = '<strong>Bold text</strong>';
```

⚠ **Warning:** Avoid using `innerHTML` with **untrusted data** to prevent security risks like **Cross-Site Scripting (XSS)**.

## **DOM Manipulation Methods**

Here are essential methods to **add, remove, and modify elements** dynamically.

### 1. `appendChild` (Add a New Element)
Adds a new child element inside an existing element.

```js
const parent = document.getElementById('parent');
const newElement = document.createElement('div');
newElement.textContent = 'New child!';
parent.appendChild(newElement);
```

### 2. `removeChild` (Remove an Element)
Removes a specific child element.

```js
const parent = document.getElementById('parent');
const child = document.getElementById('child');
parent.removeChild(child);
```

### 3. `setAttribute` & `getAttribute` (Modify Attributes)
| Method                      | What it does                  |
| --------------------------- | ----------------------------- |
| `setAttribute(name, value)` | Adds or updates an attribute. |
| `getAttribute(name)`        | Retrieves an attribute value. |

```js
const element = document.getElementById('myElement');
element.setAttribute('class', 'newClass'); // Set class
console.log(element.getAttribute('class')); // Get class
```

### 4. `classList` Methods (Modify CSS Classes)
| Method                          | What it does              |
| ------------------------------- | ------------------------- |
| `classList.add(className)`      | Adds a class.             |
| `classList.remove(className)`   | Removes a class.          |
| `classList.toggle(className)`   | Adds/removes a class.     |
| `classList.contains(className)` | Checks if a class exists. |

```js
const element = document.getElementById('box');

// Add a class
element.classList.add('highlight');

// Remove a class
element.classList.remove('hidden');

// Toggle a class
element.classList.toggle('active');

// Check for a class
if (element.classList.contains('active')) {
  console.log('Element is active!');
}
```

## Notes
- Always **use JavaScript to attach event listeners** instead of inline HTML attributes (`onclick`).
- Prefer `querySelector` and `querySelectorAll` for flexibility.
- Avoid `innerHTML` for untrusted content to prevent security issues.