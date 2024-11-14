import React, { useState } from "react";
function FriendsList({ handleSelectClick, selectedFriend, friends }) {
  //   console.log(selectedFriend);

  return (
    <>
      {friends.map((friend) => (
        <li key={friend.id} className="selected">
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name}</h3>
          <p
            className={
              friend.balance > 0 ? "green" : friend.balance < 0 ? "red" : ""
            }
          >
            {friend.balance > 0
              ? `${friend.name} owes you ${friend.balance}$`
              : friend.balance < 0
              ? `You owe ${friend.name} ${Math.abs(friend.balance)}$`
              : `You and ${friend.name} are even `}
          </p>
          <button className="button" onClick={() => handleSelectClick(friend)}>
            {selectedFriend?.id === friend.id ? "Close" : "Select"}
          </button>
        </li>
      ))}
    </>
  );
}

export default FriendsList;
