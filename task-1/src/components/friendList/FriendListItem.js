import React from "react";
import styles from "./friendList.module.css";

const FriendListItem = ({ friends }) => {
  return (
    <li className={styles.id}>
        {friends.isOnline ? (<span className={styles.isOnline}></span>) : (<span className={styles.isOffline}></span>)}
      <img className={styles.avatar} src={friends.avatar} alt="friends avatar" />
      <div className={styles.name}> {friends.name}</div>
    </li>
  );
};

export default FriendListItem;
