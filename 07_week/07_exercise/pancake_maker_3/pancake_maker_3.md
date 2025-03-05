# Pancake Customization App (Step 3: Order Management)

In this step, you will improve your application by handling **orders as objects** and storing them in an **array**. Additionally, you will create an **"All Orders"** page where a "chef" can manage the status of each order. 

## What’s New?
1. **Store orders in an array**  
   - Each order is stored as an object containing:  
     - A unique `id`
     - The `customerName`
     - The `selectedPancake`
     - An array of `toppings`
     - An array of `extras`
     - The `deliveryMethod`
     - The `totalPrice`
     - The `status` (default: `"waiting"`)
  
2. **New "All Orders" page**  
   - Displays all stored orders.
   - The "chef" can **update the status** of each order.
   - Different statuses will have **different styles**:
     - **"waiting"** - default style (e.g., yellow)
     - **"ready"** - updated style (e.g., blue)
     - **"delivered"** - final style (e.g., green)

## Steps to implement  

### Store orders in an array  
- Create an `orders` array to store order objects.  
- When a user **confirms** an order:  
  - Generate a **unique ID** (e.g., using `Date.now()`).  
  - Create an **object** containing order details.  
  - Add the object to the `orders` array.  
  - Store `orders` in **localStorage** so data is not lost when the page refreshes.  

### Display orders on the "All Orders" page  
- Retrieve all orders from `localStorage` and display them.  
- Each order should show:  
  - **Order ID**
  - **Customer Name**
  - **Pancake Type**
  - **Toppings & Extras**
  - **Delivery Method**
  - **Total Price**
  - **Status** (Dropdown or Buttons to change status)

### Update order status  
- Add a **dropdown** or **buttons** to allow the chef to update the status.  
- When the status changes, update the corresponding order object and save it in `localStorage`.  
- Apply different styles based on status:  
  - `"waiting"` → 🟡 Yellow  
  - `"ready"` → 🔵 Blue  
  - `"delivered"` → 🟢 Green  

### Persist data using `localStorage`  
- Save orders in `localStorage` to keep data after refreshing.  
- Load and display orders from `localStorage` when the "All Orders" page opens.  


## Example order object:
```javascript
{
  id: 1700000001234,
  customerName: "Alice",
  selectedPancake: "Chocolate",
  toppings: ["Nuts", "Syrup"],
  extras: ["Whipped Cream"],
  deliveryMethod: "Delivery",
  totalPrice: 15,
  status: "waiting"
}
```

### Bonus fatures:
- Add **search** to find orders by name or ID.  
- Add **sorting** (e.g., show "waiting" orders first).  
- Allow the **removal of orders** when delivered.  

