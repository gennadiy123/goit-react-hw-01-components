import React from "react";
import styles from "./transactionHistory.module.css";
import transactions from "../user/transactions.json";
import TransactionHistoryItem from "./TransactionHistoryItem";

const TransactionHistory = () => {
  return (
    <table className={styles.statistics}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
    {transactions.map(transactions => (
          <TransactionHistoryItem transactions={transactions} key={transactions.id} />
        ))}
    </tbody>
  </table>
  );
};

export default TransactionHistory;