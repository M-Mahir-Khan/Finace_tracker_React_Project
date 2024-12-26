import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <div style={styles.list}>
      <h3>🧾 Transaction History</h3>
      <ul style={styles.ul}>
        {transactions.map((txn, index) => (
          <li key={index} style={styles.li}>
            <span>{txn.description}</span>
            <span style={styles.amount}>
              {txn.category}: ₹{txn.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  list: {
    margin: "20px auto",
    maxWidth: "500px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  ul: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  li: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
  },
  amount: {
    fontWeight: "bold",
    color: "#1E90FF",
  },
};

export default TransactionList;
