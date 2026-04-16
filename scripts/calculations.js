let budgetValue = 0; 
let totalExpensesValue = 0;
let balanceColor = "";

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
let expensesNumber = expenseEntries.length;

function calculateExpensesTotal() {
      for (let expense of expenseEntries) {
        totalExpensesValue += expense[1];
      }
}

function calculateAverageExpense() {
    let averageResult = (expensesNumber === 0) ? 0 : totalExpensesValue / expensesNumber;
    return averageResult;
}

function calculateBalance() {
    return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
    if (calculateBalance() < 0) {
        balanceColor = "red";
    } else if (calculateBalance() < (budgetValue * 0.25)) {
        balanceColor = "orange";
    } else {
        balanceColor = "green";
    }
}

function calculateCategoryExpenses(category) {
    let categoryResult = 0;

    for (let expense of expenseEntries) {
        if (expense[0] === category){
            categoryResult += expense[1];
        }
    }

    return categoryResult;
}

function calculateLargestCategory() {
    const categoriesList = ["groceries", "restaurants", "transport", "home", "subscriptions"];
    let largestCategoryArray = ["", 0];
    let categoriesTotal = [];

    for (let category of categoriesList)  {
        let categoryExpenseCalculatedValue = calculateCategoryExpenses(category);

        categoriesTotal.push([category, categoryExpenseCalculatedValue]);

        if (categoryExpenseCalculatedValue > largestCategoryArray[1]) {
            largestCategoryArray = [category, categoryExpenseCalculatedValue];
        }
    }
    
    return largestCategoryArray[0];
}

function addExpenseEntry(newExpense) {
    expenseEntries.push(newExpense);
    totalExpensesValue += newExpense[1];
}

calculateExpensesTotal();