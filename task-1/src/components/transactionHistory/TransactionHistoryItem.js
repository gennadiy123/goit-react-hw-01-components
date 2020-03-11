import React from "react";
import styles from "./transactionHistory.module.css";

const TransactionsHistoryItem = ({ transactions }) => {
  return (
    <tr className={styles.id}>
      <td className={styles.type}> {transactions.type}</td>
      <td className={styles.amount}> {transactions.amount}</td>
      <td className={styles.currency}> {transactions.currency}</td>
    </tr>
  );
};

export default TransactionsHistoryItem;