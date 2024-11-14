function AddFriend({
  newFriend,
  handleFriendName,
  handleFinalAdd,
  handleClose,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    handleFinalAdd(newFriend, "https://i.pravatar.cc/48");
  }
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">👫 Friend name</label>
        <input
          value={newFriend}
          type="text"
          onChange={(e) => handleFriendName(e)}
        />
        <label htmlFor="">🌄 Image URL</label>
        <input type="text" disabled value={"https://i.pravatar.cc/48"} />
        <button className="button" type="submit">
          Add
        </button>
      </form>
      <button className="button" onClick={handleClose}>
        Close
      </button>
    </>
  );
}

export default AddFriend;
