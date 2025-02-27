const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderButton = document.getElementById("seeOrder");
const summaryText = document.querySelector("#summaryText");
const customerName = document.querySelector("#customerName");

const changeHandler = (event) => {
  console.log("Event: ", event);
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );

  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );

  let deliveryFee = 0;
  const deliveryChecked = document.querySelector(".delivery:checked");
  if (deliveryChecked) {
    deliveryFee = parseFloat(deliveryChecked.dataset.price);
  }

  const totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryFee;

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeForm.addEventListener("change", changeHandler);

seeOrderButton.addEventListener("click", () => {
  // put in your code here
  const deliveryChecked = document.querySelector('[name="delivery"]:checked');
  const deliveryFee = deliveryChecked ? deliveryChecked.dataset.price : "0";

  // Get selected toppings
  const selectedToppings = [...document.querySelectorAll(".topping:checked")]
    .map((topping) => topping.value)
    .join(", ");

  // Get selected extras
  const selectedExtras = [...document.querySelectorAll(".extra:checked")]
    .map((extra) => extra.value)
    .join(", ");

  // Handle case where no toppings or extras are selected
  const toppingsText = selectedToppings
    ? `with ${selectedToppings}`
    : "with no toppings";
  const extrasText = selectedExtras ? `and ${selectedExtras}` : "and no extras";

  summaryText.textContent = `Order created by ${customerName.value} for ${pancakeType.value} ${toppingsText} ${extrasText}. Delivery fee: ${deliveryFee}€`;
});
