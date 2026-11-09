# Expense Tracker App

A small React application for managing expense transactions. The app demonstrates
creating, viewing, editing, and deleting transactions using React state.

## Features

- View transactions in a table with their title, amount, and date.
- Add transactions from the **Add** button in the header.
- Edit an existing transaction or delete it from the table.
- See the total of all transaction amounts.

Transactions are held in React state and are not saved to a database or browser
storage. The sample transactions return when the page is reloaded. The add/edit
form is shown in the page when adding or editing a transaction.

## Requirements

- Node.js (with npm)

## Getting started

From this directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint on the project. |

## Project structure

```text
src/
  components/
    AddEditForm.jsx   # Add and edit transaction form
    AddEditForm.css   # Form styles
    Header.jsx        # App title and Add button
    Header.css        # Header styles
    calculateTotalExpenses.js # Calculates the total amount
  App.jsx             # Transaction state and CRUD actions
  App.css             # App and table styles
  main.jsx            # React application entry point
```

## Technologies

- React
- Vite
- ESLint
