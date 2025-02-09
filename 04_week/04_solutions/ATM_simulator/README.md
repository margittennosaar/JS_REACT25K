# Basic ATM Simulator

This project allows users to check their balance, deposit money, and withdraw money using a simple web interface.

## Main features
    - Shows the user's balance on the page.
    - Lets users deposit money by typing an amount and clicking a button.
    - Lets users withdraw money (but only if they have enough balance).
    - Updates the balance instantly without reloading the page.# **Project 2: Basic ATM Simulator

## Steps to build the project

1. Create the HTML Structure
   - Add a section to **show the balance**.  
   - Add an **input field and button** for **depositing money**.  
   - Add an **input field and button** for **withdrawing money**.  
   - Add a **message area** to show errors (e.g., "Not enough balance").  

2. Add event listeners
   - Use `addEventListener()` to detect when the user **clicks the deposit button**.  
   - Use `addEventListener()` to detect when the user **clicks the withdraw button**.  

3. Write JavaScript functions
   - **`checkBalance()`** → Displays the current balance.  
   - **`deposit()`** → Adds money to the balance (only if the amount is valid).  
   - **`withdraw()`** → Subtracts money (only if the user has enough balance).  

4. Validate user input
   - Make sure users enter **only numbers** when depositing or withdrawing.  
   - Prevent withdrawals if the **balance is too low**.  
   - Show **error messages** when needed.  

5. Improve the design and styling
   - Use a **Google Font** to make the app look nice.  
   - Add **colors and spacing** to make the layout clean.  

### Bonus challenge
  - Add a PIN login system before the user can access their account.