import React from "react";

const Header = ({ balance }) => {
  return (
    <header style={styles.header}>
      <h1>Personal Finance Tracker</h1>
      <h2>Current Balance: ₹{balance}</h2>
    </header>
  );
};

const styles = {
  header: {
    textAlign: "center",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 0",
  },
};

export default Header;
