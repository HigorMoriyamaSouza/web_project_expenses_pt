let budgetValue = 0; //Stores total budget value
let totalExpensesValue = 0; //Stores expenses's total value
let expensesNumber = 0;
let balanceColor = " ";

/*
 * NEW code
*/
// let totalValuePerCategory = 0;

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

let categoriesTotal = [];


/*
 * New function to solve expenseEntries iteration repetition
*/
// function expenseEntriesIteration(codeSequenceToBeExecuted) {
//     for (let expense of expenseEntries) {
//         codeSequenceToBeExecuted;
//     }
// }

function calculateExpensesTotal() {
    /*
     * Old code
    */
      for (let expense of expenseEntries) {
        expensesNumber++;
        totalExpensesValue += expense[1];
      }
    
  /*
   * NEW code
  */
//   expenseEntriesIteration(() => {
//         expensesNumber++;
//         totalExpensesValue += expense[1];
//   })
}

calculateExpensesTotal();

function calculateAverageExpense() {
    let averageResult = (expensesNumber === 0) ? 0 : totalExpensesValue / expensesNumber;
    return averageResult;
}

function calculateBalance() {
    return budgetInput.value - totalExpensesValue;
}

function updateBalanceColor() {
    if (calculateBalance() < 0) {
        balanceColor = "red";
    } else if (calculateBalance() < (budgetInput.value * 0.25)) {
        balanceColor = "orange";
    } else {
        balanceColor = "green";
    }
}

function calculateCategoryExpenses(category) {
    /*
     * Old code
    */
    let categoryResult = 0;

    for (let expense of expenseEntries) {
        if (expense[0] === category){
            categoryResult += expense[1];
        }
    }

    return categoryResult;

    /*
     * NEW code
    */
    // expenseEntriesIteration(() => {
    //     if (expense[0] === category){
    //         totalValuePerCategory += expense[1];
    //     }      
    // });

    // return totalValuePerCategory;
}

function calculateLargestCategory() {
    const categoriesList = ["groceries", "restaurants", "transport", "home", "subscription"];
    let largestCategoryArray = ["", 0];

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
    calculateExpensesTotal();
    calculateAverageExpense();
}

