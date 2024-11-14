import { useState } from "react";

function SplittingInfo({ selectedFriend, updateFriendBalance }) {
  const [billVal, setBillVal] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [billPayer, setBillPayer] = useState("user");

  function handleYourExpense(e) {
    const expense = parseFloat(e.target.value) || 0;
    const billValue = parseFloat(billVal) || 0;
    if (expense < billValue) setYourExpense(e.target.value);
  }
  function handleSplitSubmit(e) {
    e.preventDefault();
    console.log(" Form submitted with:", { billVal, yourExpense, billPayer });
    if (billPayer === "user") {
      const newBalance = selectedFriend.balance + (billVal - yourExpense);
      updateFriendBalance(selectedFriend, newBalance);
    } else if (billPayer === "friend") {
      const newBalance = selectedFriend.balance - (billVal - yourExpense);
      updateFriendBalance(selectedFriend, newBalance);
    }
    // console.log(" Form submitted with:", { billVal, yourExpense, billPayer });
  }
  return (
    <form className="form-split-bill" onSubmit={handleSplitSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={billVal}
        onChange={(e) => setBillVal(e.target.value)}
      />
      <label htmlFor="">🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) => handleYourExpense(e)}
      />
      <label htmlFor="">{`👫 ${selectedFriend.name}s expense`}</label>
      <input type="text" disabled value={billVal - yourExpense} />
      <label>🤑 Who is paying the bill</label>
      <select
        value={billPayer}
        onChange={(e) => {
          setBillPayer((prevState) => e.target.value);
        }}
      >
        <option value="user">You </option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button type="submit" className="button">
        Split bill
      </button>
    </form>
  );
}

export default SplittingInfo;
