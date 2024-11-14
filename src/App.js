import React from "react";
import { useState } from "react";
import initialFriends from "./data";
import FriendsList from "./FriendsList";
import SplittingInfo from "./SplittingInfo";
import AddFriend from "./AddFriend";
function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleAddFriend, setToggleAddFriend] = useState(false);
  const [toggleAddFriendButton, setToggleAddFriendButton] = useState(true);
  const [newFriend, setNewFriend] = useState("");
  function generateRandomNumericId() {
    return Math.floor(10000000 + Math.random() * 90000000);
  }
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
  function handleAddingFriend() {
    setToggleAddFriend((prevState) => !prevState);
    setToggleAddFriendButton((prevState) => !prevState);
  }
  function handleFriendName(e) {
    setNewFriend(e.target.value);
  }
  function handleFinalAdd(newFriend, imageSrc) {
    console.log(newFriend);
    let add = {
      id: generateRandomNumericId(),
      name: newFriend,
      image: imageSrc,
      balance: 0,
    };

    setFriends([...friends, add]);
    setToggleAddFriendButton((prevState) => !prevState);
    setToggleAddFriend((prevState) => !prevState);
  }
  function handleClose() {
    setToggleAddFriendButton((prevState) => !prevState);
    setToggleAddFriend((prevState) => !prevState);
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
        {toggleAddFriendButton ? (
          <button className="button add" onClick={handleAddingFriend}>
            Add friend
          </button>
        ) : null}

        {toggleAddFriend ? (
          <AddFriend
            newFriend={newFriend}
            handleFriendName={handleFriendName}
            handleFinalAdd={handleFinalAdd}
            handleClose={handleClose}
          />
        ) : (
          ""
        )}
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
