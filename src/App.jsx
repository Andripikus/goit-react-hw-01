import React from "react";
import Profile from "./components/Profile/Profile";
import userData from "./data/profile.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friendList.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactionHistory.json";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <>
        <FriendList friends={friends} />
      </>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}
