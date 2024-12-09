import React, { useState } from "react";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList"
const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const calculateBalance = () => {
    return transactions.reduce((total, txn) => total + txn.amount, 0);
  };

  return (
    <div>
      <Header balance={calculateBalance()} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;
