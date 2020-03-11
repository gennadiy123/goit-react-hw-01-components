import React from "react";
import styles from "./statistics.module.css";
import stat from "../user/statisticalData.json";
import StatisticsItem from "./StatisticItem";

const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>
        {stat.map(stat => (
          <StatisticsItem stat={stat} key={stat.id} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
