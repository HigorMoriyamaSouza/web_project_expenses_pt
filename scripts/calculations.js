let budgetValue = 0; //Stores total budget value
let totalExpensesValue = 0; //Stores expenses's total value
let expensesNumber = 0;

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

function calculateExpensesTotal() {
  for (let expense of expenseEntries) {
    expensesNumber++;
    totalExpensesValue += expense[1];
  }
}

calculateExpensesTotal();

function calculateAverageExpense() {
    let averageResult = (expensesNumber === 0) ? 0 : totalExpensesValue / expensesNumber;
    return averageResult;
}

function calculateBalance() {
    return budgetInput.value - totalExpensesValue;
}

console.log(`Teste: ${200 } OK`);
