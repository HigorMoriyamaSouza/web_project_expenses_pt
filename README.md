# 💸 Expense Tracker (Vanilla JavaScript)

A lightweight expense tracking application built with **Vanilla JavaScript**, focused on **clean state management, data persistence, and dynamic UI updates**.

This project demonstrates core frontend engineering skills without relying on frameworks — emphasizing a strong understanding of JavaScript fundamentals.

---

## 🚀 Features

* ✅ Set and manage a personal budget
* ✅ Add and track expenses by category
* ✅ Real-time statistics:

  * Total expenses
  * Average expense
  * Remaining balance
  * Highest expense category
* ✅ Data persistence using **LocalStorage**
* ✅ Dynamic UI updates without page reload
* ✅ Reset to default state

---

## 🧠 Technical Highlights

This project was designed to reinforce **core JavaScript concepts used in real-world applications**:

* **State Management**

  * Centralized handling of `expenseEntries` and budget
  * Controlled updates to avoid unintended mutations

* **Data Persistence**

  * LocalStorage integration
  * Serialization with `JSON.stringify` / `JSON.parse`

* **Deep Copy Handling**

  * Use of `structuredClone()` to prevent shared references

* **Separation of Concerns**

  * `calculations.js` → business logic
  * `handle-html.js` → DOM manipulation
  * `index.js` → orchestration & app flow

* **Functional Thinking**

  * Iteration, aggregation, and data transformation

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (ES6+)

No frameworks or libraries — pure JavaScript.

---

## 📂 Project Structure

```
/scripts
  ├── calculations.js   # Business logic (totals, averages, categories)
  ├── handle-html.js   # DOM updates and rendering
  └── index.js         # App initialization & state coordination

/pages
  └── index.css        # Styling
```

---

## ▶️ How to Run

1. Clone the repository
2. Open `index.html` in your browser

No build step required.

---

## 🎯 What This Project Demonstrates

* Ability to build **interactive web applications from scratch**
* Strong understanding of **JavaScript fundamentals**
* Experience with **state, data flow, and persistence**
* Writing **modular and maintainable code**

---

## 📌 Future Improvements

* Input validation and error handling
* Category filtering and search
* Charts/visualization (e.g., expenses breakdown)
* Migration to a framework like React

---

## 👨‍💻 Author

**Higor Moriyama Souza**
Software Engineer | Backend-Focused | Full Stack Capable

---

## 💡 Final Note

This project focuses on mastering the fundamentals that power modern frameworks — demonstrating the ability to build scalable logic **without abstraction layers**.
