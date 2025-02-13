# Pancake customization app (STEP 1)

This is the first step of your application, where you'll build a simple interactive webpage that allows users to customize their pancakes and see the total price update dynamically. You will submit this project later, so follow the steps carefully and keep your code clean and organized.

This application lets users customize their pancakes by selecting different types, toppings, and extras. As they make choices, the total price updates instantly, just like a pizza or burger configurator on a food-ordering site.

## Steps to Build the Project

1. Set up event listeners
   - Use `addEventListener` to detect when the user changes the pancake type in the dropdown menu.
   - Use `addEventListener` to track when the user selects or deselects toppings and extras.
2. Retrive user selections
   - Get the selected pancake type from the dropdown.
   - Get all checked toppings from the list.
   - Get all checked extras and their prices.
3. Calculate the total price
   - Start with the base price of the selected pancake type.
   - Add 1€ per topping if selected.
   - Add the specific extra price for additional add-ons.
4. Update the Price Display
   - Dynamically update the `#totalPrice` and `#totalPriceDisplay` with the correct total price.
5. Improve the design and styling to make it more appealing
   *Inspiration for this app is Kotipizza's "Make your Own Pizza" page. [See example](https://www.kotipizza.fi/menu/perfetta) for inspiration.*
   - Integrate a font from Google Fonts to apply to all elements on the page. Select a font that aligns with the modern and appealing aesthetic of the project.
   - Change the image and the colors, to make this app in your style. 
   - Implement a captivating animation for the price display to draw attention to price changes.
