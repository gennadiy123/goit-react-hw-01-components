import React from "react";
import Profile from "./profile/Profile";
import user from "./user/user.json";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";


const App = () => (
  <>
    <Profile data={user} />
    <Statistics />
    <FriendList />
    <TransactionHistory />
  </>
);

export default App;
