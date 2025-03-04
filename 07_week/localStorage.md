# LocalStorage in JavaScript

LocalStorage is a web storage API that allows you to store **key-value pairs** in the browser. Unlike cookies, LocalStorage **persists** even when the browser is closed and reopened.

## Key Features of LocalStorage

- **Persistent Storage** – Data remains saved until manually removed.
- **Domain-Specific** – Data is accessible only from the domain that stored it.
- **Storage Limit** – Can store approximately **5MB** of data.
- **Synchronous API** – Operations run immediately, which can impact performance for large datasets.

## Basic Operations with LocalStorage

LocalStorage provides four main methods: `setItem()`, `getItem()`, `removeItem()`, and `clear()`.

### Storing Data (`setItem()`)

Use `setItem()` to save data in LocalStorage.

```javascript
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('theme', 'dark');
```

If storing **objects or arrays**, convert them to strings using `JSON.stringify()`.

```javascript
const user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));
```

### Retrieving Data (`getItem()`)

Use `getItem()` to retrieve stored data.

```javascript
const username = localStorage.getItem('username');
console.log(username); // Output: JohnDoe
```

If retrieving an **object or array**, use `JSON.parse()` to restore its original format.

```javascript
const userData = JSON.parse(localStorage.getItem('user'));
console.log(userData.name); // Output: John
```

### Removing Data (`removeItem()`)

To delete a specific item:

```javascript
localStorage.removeItem('username');
```

### Clearing All Data (`clear()`)

To remove all stored data:

```javascript
localStorage.clear();
```

## Example: Storing and Retrieving User Preferences

### Storing Preferences

```javascript
function savePreferences() {
  const theme = document.querySelector('#theme').value;
  const username = document.querySelector('#username').value;

  localStorage.setItem('theme', theme);
  localStorage.setItem('username', username);

  alert('Preferences saved!');
}
```

### Retrieving Preferences

```javascript
function loadPreferences() {
  const savedTheme = localStorage.getItem('theme');
  const savedUsername = localStorage.getItem('username');

  if (savedTheme && savedUsername) {
    document.querySelector('#theme').value = savedTheme;
    document.querySelector('#username').value = savedUsername;
    alert(`Welcome back, ${savedUsername}!`);
  }
}
```

### Removing Preferences

```javascript
function clearPreferences() {
  localStorage.removeItem('theme');
  localStorage.removeItem('username');
  alert('Preferences cleared!');
}
```

## Use Cases of LocalStorage

- **Saving user preferences** (e.g., theme, language).
- **Caching small data** to reduce API calls.
- **Tracking user progress** in games or forms.
- **Storing temporary session data** between page reloads.

## Limitations of LocalStorage

- **Limited storage size** (~5MB).
- **Synchronous blocking** – Operations pause script execution.
- **Security risk** – Stored data is accessible via JavaScript, making it vulnerable to XSS attacks.
- **Same-origin policy** – Data is only accessible on the same domain and protocol.

## Debugging and Managing LocalStorage

You can view LocalStorage data in **browser developer tools**:

1. Open **Developer Tools** (`F12` or `Right-click → Inspect`).
2. Navigate to the **Application** tab.
3. Click **LocalStorage** in the sidebar to view stored data.

## Best Practices for LocalStorage

1. **Limit data storage** – Store small pieces of non-sensitive data.
2. **Sanitize user input** – Prevent cross-site scripting (XSS) vulnerabilities.
3. **Implement expiration logic** – LocalStorage does not support automatic expiration.
4. **Check browser support** – Although widely supported, always verify before using:

   ```javascript
   if (typeof(Storage) !== "undefined") {
     console.log("LocalStorage is supported");
   } else {
     console.error("LocalStorage is not supported in this browser.");
   }
   ```