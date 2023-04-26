import React, { useReducer, createContext } from "react";
//importing fucntion to take in the old state and an action and returns a new state
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 100,
    category: "Salary",
    type: "Income",
    date: "2021-05-24",
    id: "e9309fff-3a78-4648-8cf6-d1dbcf509f8b",
  },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  //complex version of useState
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  console.log(transactions);
  //Action creators
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  //add a new trx
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  //update the account balance
  const balance = transactions.reduce(
    (acc, curVal) =>
      curVal.type === "Expense" ? acc - curVal.amount : acc + curVal.amount,
    0
  );

  //returning the changes
  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
