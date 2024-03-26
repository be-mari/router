import { useState } from "react";

const Homework = () => {
  // String
  const [myString, setMyString] = useState<string>("Homework");

  /// String Array
  const [myStringArray, setMyStringArray] = useState<string[]>([
    "Chocolate",
    "Gin",
  ]);
  const [inputValue, setInputValue] = useState<string>("");

  //// Number
  const [myNumber, setMyNumber] = useState<number>(0);

  ///// Number Array
  const [myNumberArr, setMyNumberArr] = useState<number[]>([1, 2, 3]);

  ////// Boolean
  const [myBoolean, setMyBoolean] = useState<boolean>(true);

  /////// Boolean Array
  const [booleanArray, setBooleanArray] = useState<boolean[]>([
    true,
    false,
    true,
  ]);

  /// String Array Function
  const addItemToStringArray = () => {
    setMyStringArray([...myStringArray, inputValue]);
    setInputValue("");
  };
  const removeItemFromStringArray = () => {
    if (myStringArray.length > 0) {
      const newArray = [...myStringArray];
      newArray.pop();
      setMyStringArray(newArray);
    }
  };

  ///// Number Array Function
  const addItemToNumArr = () => {
    setMyNumberArr([...myNumberArr, inputValue]);
    setInputValue("");
  };
  const removeItemFromNumArr = () => {
    if (myNumberArr.length > 0) {
      const newNumArray = [...myNumberArr];
      newNumArray.pop();
      setMyNumberArr(newNumArray);
    }
  };

  ////// Boolean Function
  const handleBooleanValue = () => {
    setMyBoolean((prevValue) => !prevValue);
  };

  /////// Boolean Array Function
  const addItemToBooleanArray = () => {
    setBooleanArray([...booleanArray, true]);
  };

  const removeItemFromBooleanArray = () => {
    if (booleanArray.length > 0) {
      const newArray = [...booleanArray];
      newArray.pop();
      setBooleanArray(newArray);
    }
  };

  return (
    <>
      {/* String */}
      <div className="hw__string">
        <h2>String:</h2>
        <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
          This is {myString}
        </p>
        <button
          onClick={() => {
            setMyString("Torture 🤣");
          }}
        >
          Homework
        </button>
      </div>
      <hr />

      {/* String Array */}
      <div className="hw__stringArr">
        <h2>String Array:</h2>
        <ul>
          {myStringArray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItemToStringArray}>Add Item</button>
        <button onClick={removeItemFromStringArray}>Remove Last Item</button>
      </div>
      <hr />

      {/* Number */}
      <div className="hw__number">
        <h2>Number:</h2>
        <input
          className="hw__inpt"
          type="text"
          placeholder="Type current price"
          value={myNumber}
          onChange={(e) => setMyNumber(Number(e.target.value))}
        />

        <button
          onClick={() => {
            const newPrice =
              Number(myNumber || 0) - Number(myNumber || 0) * 0.25;
            setMyNumber(newPrice);
          }}
        >
          Price with 25% discount
        </button>
      </div>
      <hr />

      {/* Number Array */}
      <div className="hw__numberArr">
        <h2>Number Array:</h2>
        <ul>
          {myNumberArr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItemToNumArr}>Add Item</button>
        <button onClick={removeItemFromNumArr}>Remove Last Item</button>
      </div>
      <hr />

      {/* Boolean */}
      <div className="hw__boolean">
        <h2>Boolean</h2>
        <p>Please select correct answers.</p>
        <div className="hw__boolean__quiz">
          This is super simple. <br /> {myBoolean ? "true" : "false"} <br />{" "}
          <button onClick={handleBooleanValue}>Is it true?</button>
        </div>
      </div>

      {/* Boolean Array*/}
      <div className="hw__booleanArr">
        <h2>Boolean Array:</h2>
        <ul>
          {booleanArray.map((item, index) => (
            <li key={index}>{item.toString()}</li>
          ))}
        </ul>
        <button onClick={addItemToBooleanArray}>Add Item</button>
        <button onClick={removeItemFromBooleanArray}>Remove Last Item</button>
      </div>
    </>
  );
};
export default Homework;
