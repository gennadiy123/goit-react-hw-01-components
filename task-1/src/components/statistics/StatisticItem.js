import React from "react";
import styles from "./statistics.module.css";

const StatisticsItem = ({ stat }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}> {stat.percentage}%</span>
    </li>
  );
};
export default StatisticsItem;