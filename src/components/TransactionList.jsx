import React from "react";
const TransactionList = ({ transactions }) => {
  return (
    <div style={styles.list}>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((txn, index) => (
          <li key={index}>
            {txn.description} ({txn.category}): ₹{txn.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};
const styles = {
  list: {
    margin: "20px auto",
    maxWidth: "400px",
    textAlign: "left",
  },
};

export default TransactionList;
