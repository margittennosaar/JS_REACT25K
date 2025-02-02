/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */

function buildGroceryList() {
    let list = [];
    while (true) {
        let item = prompt("Enter grocery item (type 'done' to finish):");
        if (item.toLowerCase() === "done") break;
        list.push(item);
    }
    console.log("Grocery List:", list.join(", "));
}

buildGroceryList();