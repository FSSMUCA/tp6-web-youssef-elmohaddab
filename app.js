const form = document.getElementById("calcForm");
const errorDiv = document.getElementById("error");
const resultDiv = document.getElementById("result");
const historyList = document.getElementById("history");

let history = [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const numA = parseFloat(document.getElementById("numA").value);
  const numB = parseFloat(document.getElementById("numB").value);
  const operation = document.getElementById("operation").value;

  errorDiv.textContent = "";
  resultDiv.textContent = "";

  if (isNaN(numA) || isNaN(numB)) {
    errorDiv.textContent = "Veuillez entrer deux nombres valides.";
    return;
  }

  if (operation === "divide" && numB === 0) {
    errorDiv.textContent = "Erreur : Division par zéro interdite.";
    return;
  }

  // Calcul
  let result;
  switch (operation) {
    case "add":
      result = numA + numB;
      break;
    case "subtract":
      result = numA - numB;
      break;
    case "multiply":
      result = numA * numB;
      break;
    case "divide":
      result = numA / numB;
      break;
  }

  resultDiv.textContent = "Résultat : " + result;

  // Historique
  const operationText = `${numA} ${getSymbol(operation)} ${numB} = ${result}`;
  history.push(operationText);

  updateHistory();
});

function getSymbol(op) {
  switch(op) {
    case "add": return "+";
    case "subtract": return "−";
    case "multiply": return "×";
    case "divide": return "÷";
  }
}

function updateHistory() {
  historyList.innerHTML = "";
  history.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}