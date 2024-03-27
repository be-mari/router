import { useState } from "react";
import Button from "../components/button";

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
    const numericValue = parseInt(inputValue, 10);
    if (!isNaN(numericValue)) {
      setMyNumberArr([...myNumberArr, numericValue]);
      setInputValue("");
    }
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
    <div className="homework">
      {/* String */}

      <h2>String:</h2>
      <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
        This is {myString}
      </p>
      <Button
        onClick={() => {
          setMyString("Torture 🤣");
        }}
      >
        Homework
      </Button>

      <hr />

      {/* String Array */}

      <h2>String Array:</h2>
      <ul className="no-bullets">
        {myStringArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>
        <Button onClick={addItemToStringArray}>Add Item</Button>
        <Button onClick={removeItemFromStringArray}>Remove Last Item</Button>
      </div>

      <hr />

      {/* Number */}

      <h2>Number:</h2>
      <input
        className="input"
        type="text"
        placeholder="Type current price"
        value={myNumber}
        onChange={(e) => setMyNumber(Number(e.target.value))}
      />
      <Button
        onClick={() => {
          const newPrice = Number(myNumber || 0) - Number(myNumber || 0) * 0.25;
          setMyNumber(newPrice);
        }}
      >
        Price with 25% discount
      </Button>

      <hr />

      {/* Number Array */}

      <h2>Number Array:</h2>
      <ul className="no-bullets">
        {myNumberArr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        className="input"
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>
        <Button onClick={addItemToNumArr}>Add Item</Button>
        <Button onClick={removeItemFromNumArr}>Remove Last Item</Button>
      </div>

      <hr />

      {/* Boolean */}

      <h2>Boolean</h2>
      <p>Please select correct answers.</p>
      <div className="boolean__q">This is super simple.</div>
      <div className="boolean__a">{myBoolean ? "true" : "false"}</div>
      <Button onClick={handleBooleanValue}>Is it true?</Button>
      <hr />

      {/* Boolean Array*/}

      <h2>Boolean Array:</h2>
      <ul className="no-bullets">
        {booleanArray.map((item, index) => (
          <li key={index}>{item.toString()}</li>
        ))}
      </ul>
      <Button onClick={addItemToBooleanArray}>Add Item</Button>
      <Button onClick={removeItemFromBooleanArray}>Remove Last Item</Button>
      <hr />
    </div>
  );
};
export default Homework;
