import React from "react";

const Header = ({ balance }) => {
  return (
    <header style={styles.header}>
      <h1>💸 Personal Finance Tracker</h1>
      <h2>Current Balance: ₹{balance}</h2>
    </header>
  );
};

const styles = {
  header: {
    textAlign: "center",
    backgroundColor: "#1E90FF",
    color: "white",
    padding: "20px 0",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "20px",
  },
};

export default Header;
