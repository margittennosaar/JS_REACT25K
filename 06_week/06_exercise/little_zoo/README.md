# Little Zoo project 🦊🐻🦅

Before we dive into objects, let’s refresh what we’ve learned so far! This task will combine arrays, loops, conditionals, functions, and DOM manipulation into a fun, interactive project.

## Features

A simple zoo animal tracker that:
- Displays a list of animals on the page.
- Lets users filter animals by type.
- Lets users search animals by name.
- Allows adding new animals (they stay until the page refreshes).
- Improves the look and feel of the page.

## **Steps to build the project**  

### **1. Set up an array of animals**  
- Create an **array of animal names** (e.g., `["Fox", "Bear", "Eagle"]`).  
- Use this array to **display animals on the page** when it loads.  

### **2. Show animals on the page**  
- Use a **loop** to go through the array.  
- Dynamically create `<li>` elements for each animal and **add them to an unordered list (`<ul>`)**.  
- Make sure to **clear the list** before updating it.  

### **3. Let users add new animals**  
- Add an **input field** and a **button** labeled `"Add Animal"`.  
- When clicked, the button should:  
  - Get the animal name from the input field.  
  - Add it to the array.  
  - Update the displayed list.  
  - Clear the input field.  

### **4. Filter animals by type**  
- Add a **dropdown menu** with animal types (e.g., `"Mammal", "Bird", "Reptile"`).  
- When a type is selected, **update the displayed list** to show only animals of that type.  
- If `"All"` is selected, show **all animals**.  

### **5. Search for animals by name**  
- Add a **search bar** where users can type part of an animal’s name.  
- When typing, update the list to show only matching animals.  
- If no match is found, display a message like `"No animals found."`  

### **6. Remove an animal from the list**  
- Each animal should have a **"Remove" button** next to it.  
- Clicking **"Remove"** should:  
  - Remove the animal from the array.  
  - Update the displayed list.  

### **7. Sort the list alphabetically**  
- Add a **button** labeled `"Sort Animals"` that:  
  - Sorts the array alphabetically.  
  - Updates the displayed list.  

### **8. Improve the page design**  
- Style the **animal list** so each entry looks like a small **card** with a background.  
- Make the **buttons and inputs user-friendly**.  

---

## **Hints**  

💡 **Use `.forEach()`** to display the animals in the list.  
💡 **Use `.filter()`** to handle search and filters.  
💡 **Use `.sort()`** for alphabetical sorting.  
💡 **Use `.removeChild()` or `.innerHTML = ""`** to clear the list before updating it.  
💡 **Use `preventDefault()`** to stop form submission from refreshing the page.  