import React from "react";
import { useState } from "react";
import initialFriends from "./data";
import FriendsList from "./FriendsList";
import SplittingInfo from "./SplittingInfo";
function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);
  const [toggleForm, setToggleForm] = useState(false);
  function handleSelectClick(friend) {
    // console.log(selectedFriend);
    setSelectedFriend((prevSelectedFriend) =>
      prevSelectedFriend?.id === friend.id ? null : friend
    );
    setToggleForm((prevToggleForm) => !prevToggleForm);
  }
  function updateFriendBalance(friend, newBalance) {
    setFriends(
      friends.map((f) =>
        f.id === friend.id ? { ...f, balance: newBalance } : f
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <ul>
          <FriendsList
            handleSelectClick={handleSelectClick}
            selectedFriend={selectedFriend ? selectedFriend : null}
            friends={friends}
          />
        </ul>
        <button className="button">Add friend</button>
        {/* on click we will ad add friends to it */}
      </div>
      {toggleForm === true ? (
        <SplittingInfo
          selectedFriend={selectedFriend}
          updateFriendBalance={updateFriendBalance}
        />
      ) : null}
    </div>
  );
}

export default App;
