// Expense Tracker App

// Array to store expense objects
let expenses = [];

// Function to add a new expense
function addExpense() {
  let expense = {
    date: new Date(),
    description: document.getElementById("description").value,
    amount: parseFloat(document.getElementById("amount").value),
    category: document.getElementById("category").value,
  };
  expenses.push(expense);
  updateExpensesList();
  clearForm();
}

// Function to update the expenses list
function updateExpensesList() {
  let expensesList = document.getElementById("expenses-list");
  expensesList.innerHTML = "";
  expenses.forEach((expense, index) => {
    let expenseHTML = `
      <li>
        <span>${expense.date.toLocaleDateString()}</span>
        <span>${expense.description}</span>
        <span>$${expense.amount.toFixed(2)}</span>
        <span>${expense.category}</span>
        <button onclick="deleteExpense(${index})">Delete</button>
      </li>
    `;
    expensesList.innerHTML += expenseHTML;
  });
}

// Function to delete an expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  updateExpensesList();
}

// Function to clear the form
function clearForm() {
  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";
}

// Function to calculate total expenses
function calculateTotalExpenses() {
  let totalExpenses = 0;
  expenses.forEach((expense) => {
    totalExpenses += expense.amount;
  });
  document.getElementById(
    "total-expenses"
  ).innerHTML = `Total Expenses: $${totalExpenses.toFixed(2)}`;
}

// Add event listener to the add expense button
document
  .getElementById("add-expense-btn")
  .addEventListener("click", addExpense);

// Update the expenses list and calculate total expenses on page load
updateExpensesList();
calculateTotalExpenses();
