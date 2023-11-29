const buttonsEl = document.querySelectorAll(".btn");
const displayEl = document.getElementById("display");
const clearEl = document.getElementById("clear");
const equalsEl = document.getElementById("equals");

let expression = "";

function addToExpression(value) {
  expression += value;
  displayEl.innerHTML = expression;
}

function clearDisplay() {
  expression = "";
  displayEl.innerHTML = "";
}

function calculate() {
  try {
    const result = eval(expression);
    displayEl.innerHTML = result;
    expression = result.toString();
  } catch (error) {
    displayEl.innerHTML = "Error";
    expression = "";
  }
}

buttonsEl.forEach((buttonEl) => {
  buttonEl.addEventListener("click", () => {
    addToExpression(buttonEl.innerHTML);
  });
});

equalsEl.addEventListener("click", calculate);

clearEl.addEventListener("click", clearDisplay);

document.getElementById("add").addEventListener("click", () => {
  addToExpression("+");
});

document.getElementById("subtract").addEventListener("click", () => {
  addToExpression("-");
});

document.getElementById("multiply").addEventListener("click", () => {
  addToExpression("*");
});

document.getElementById("divide").addEventListener("click", () => {
  addToExpression("/");
});
