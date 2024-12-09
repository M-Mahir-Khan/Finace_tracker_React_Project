import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    addTransaction({
      description,
      amount: parseFloat(amount),
      category,
    });
    setDescription("");
    setAmount("");
    setCategory("General");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="General">General</option>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Salary">Salary</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
    margin: "20px auto",
  },
};

export default TransactionForm;
