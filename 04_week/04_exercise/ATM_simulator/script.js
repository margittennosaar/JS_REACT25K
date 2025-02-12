console.log("Page loaded");

const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const balance = document.getElementById("balance");
const message = document.getElementById("message");
const inputDeposit = document.getElementById("deposit");
const inputWithdraw = document.getElementById("withdraw");

let currentBalance = 0;

depositBtn.addEventListener("click", () => {
  const depositAmount = Number(inputDeposit.value);
  deposit(depositAmount);
  balance.innerText = currentBalance;
});

withdrawBtn.addEventListener("click", () => {
  const withdrawAmount = Number(inputWithdraw.value);
  withdraw(withdrawAmount);
  balance.innerText = currentBalance;
});

function checkBalance() {
  return Number(balance.innerText);
}

function deposit(depositAmount) {
  if (typeof depositAmount !== "number") {
    message.innerText = "Please enter a number";
  } else if (depositAmount < 0) {
    message.innerText = "Please enter a positive number";
    message.style.color = "red";
  } else {
    currentBalance += depositAmount;
    message.innerText = "Deposit successful";
    message.style.color = "yellow";
  }
}

function withdraw(withdrawAmount) {
  if (typeof withdrawAmount !== "number") {
    message.innerText = "Please enter a number";
    message.style.color = "red";
  } else if (withdrawAmount < 0) {
    message.innerText = "Please enter a positive number";
    message.style.color = "red";
  } else if (withdrawAmount > currentBalance) {
    message.innerText = "Insufficient funds";
    message.style.color = "red";
  } else {
    currentBalance -= withdrawAmount;
    message.innerText = "Withdrawal successful";
    message.style.color = "yellow";
  }
}
