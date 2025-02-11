const pancakeType = document.querySelector('#type');
const toppings = document.querySelectorAll('.topping');
const extras = document.querySelectorAll('.extra');
const totalPriceDisplay = document.querySelector('#totalPriceDisplay');
const totalPriceBanner = document.querySelector('#totalPrice');

const calculateTotal = () => {
    let totalPrice = parseFloat(pancakeType.value);
    console.log('event was triggered');

    toppings.forEach(topping => {
        if (topping.checked) {
            totalPrice += parseFloat(topping.value);
        }
    });

    extras.forEach(extra => {
        if (extra.checked) {
            totalPrice += parseFloat(extra.value);
        }
    });

    totalPriceDisplay.textContent = `${totalPrice}€`;
    totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeType.addEventListener('change', calculateTotal);
toppings.forEach(topping => topping.addEventListener('change', calculateTotal));
extras.forEach(extra => extra.addEventListener('change', calculateTotal));
