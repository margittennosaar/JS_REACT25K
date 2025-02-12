# Pancake customization app (Step 2: Customer information and delivery options)  

This is the second step of your application, where you will enhance the pancake customization app by adding customer details and delivery options.  

You will submit this project later, so follow the steps carefully and keep your code clean and structured.  

This step will also refactor event handling by listening to form changes instead of attaching multiple event listeners. The focus of this step is arrays, so you will store toppings and extras in arrays and display them correctly in the order summary.  

## What has changed  

- The HTML has already been refactored, so you do not need to modify it.  
- All inputs are inside a `<form>` to allow for a single event listener.  
- Prices are stored using `data-price` instead of `value` attributes.  
- Selections should be retrieved using `.textContent` for display and `data-price` for calculations.  
- An order summary section was added to display the final order details.  

You now need to update the JavaScript based on these changes.  

## Steps to update the JavaScript  

### Refactor event listeners  
- Instead of having multiple `addEventListener()` calls, attach a single `change` event listener to the `<form>` element.  
- Inside the event handler, check which input was changed and update the order accordingly.  

### Store toppings and extras in arrays  
- Use arrays to store selected toppings and extras.  
- When a topping or extra is selected, add it to the array.  
- When it is deselected, remove it from the array.  

### Update total price calculation  
- Start with the base price of the selected pancake using `data-price`.  
- Add 1€ per topping by iterating through the toppings array.  
- Add the specific price for each extra by iterating through the extras array.  
- If "Delivery" is selected, add an extra 5€ using `data-price`.  
- Ensure the price updates instantly when any selection changes.  

### Display the order summary  
- Retrieve the customer name.
- Retrieve the selected pancake type.
- Retrieve checked toppings and extras from arrays and display them.  
- Retrieve the chosen delivery method.
- Display the complete order details when the user clicks "See order".  