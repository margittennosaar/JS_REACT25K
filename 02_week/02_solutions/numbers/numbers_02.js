/* Create a variable price and assign it the value 19.56789.
Use .toFixed() to:
Round the price to 2 decimal places.
Round the price to no decimal places.
Print both results using console.log() with messages:
"Price with 2 decimals: 19.57"
"Price with no decimals: 20"
 */

function roundPrice(price) {
  const rounded2 = price.toFixed(2);
  const rounded0 = Math.round(price);
  console.log(`Price with 2 decimals: ${rounded2}`);
  console.log(`Price with no decimals: ${rounded0}`);
}

roundPrice(19.56789);
