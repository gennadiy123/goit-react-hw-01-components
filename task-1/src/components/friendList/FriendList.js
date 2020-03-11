import React from "react";
import styles from "./friendList.module.css";
import friends from "../user/friends.json";
import FriendListItem from "./FriendListItem";

const FriendList = () => {
  return (
    <section className={styles.statistics}>
      <ul className={styles.statList}>
        {friends.map(friends => (
          <FriendListItem friends={friends} key={friends.id} />
        ))}
      </ul>
    </section>
  );
};

export default FriendList;