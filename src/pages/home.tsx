import { useState } from "react";

const StateTypesExample = () => {
  // String state
  const [stringValue, setStringValue] = useState<string>("Initial String");

  // String array state
  const [stringArray, setStringArray] = useState<string[]>([
    "Item 1",
    "Item 2",
    "Item 3",
  ]);

  // Number state
  const [numberValue, setNumberValue] = useState<number>(0);

  // Number array state
  const [numberArray, setNumberArray] = useState<number[]>([1, 2, 3]);

  // Object state
  const [objectValue, setObjectValue] = useState<object>({ key: "value" });

  // Object array state
  const [objectArray, setObjectArray] = useState<object[]>([
    { id: 1, name: "Object 1" },
    { id: 2, name: "Object 2" },
  ]);

  // Boolean state
  const [booleanValue, setBooleanValue] = useState<boolean>(true);

  // Boolean array state
  const [booleanArray, setBooleanArray] = useState<boolean[]>([true, false]);

  // Function to update string state
  const updateStringValue = () => {
    setStringValue("Updated String");
  };

  // Function to add item to string array
  const addItemToStringArray = () => {
    setStringArray([...stringArray, `Item ${stringArray.length + 1}`]);
  };

  // Function to remove last item from string array
  const removeItemFromStringArray = () => {
    if (stringArray.length > 0) {
      const newArray = [...stringArray];
      newArray.pop();
      setStringArray(newArray);
    }
  };

  // Function to update number state
  const updateNumberValue = () => {
    setNumberValue(100);
  };

  // Function to add item to number array
  const addItemToNumberArray = () => {
    setNumberArray([...numberArray, numberArray.length + 1]);
  };

  // Function to remove last item from number array
  const removeItemFromNumberArray = () => {
    if (numberArray.length > 0) {
      const newArray = [...numberArray];
      newArray.pop();
      setNumberArray(newArray);
    }
  };

  // Function to update object state
  const updateObjectValue = () => {
    setObjectValue({ key: "updated value" });
  };

  // Function to update object array state
  const updateObjectArray = () => {
    setObjectArray([
      { id: 3, name: "Object 3" },
      { id: 4, name: "Object 4" },
    ]);
  };

  // Function to toggle boolean state
  const toggleBooleanValue = () => {
    setBooleanValue((prevValue) => !prevValue);
  };

  // Function to toggle boolean value in boolean array
  const toggleBooleanValueInArray = (index: number) => {
    const newArray = [...booleanArray];
    newArray[index] = !newArray[index];
    setBooleanArray(newArray);
  };

  return (
    <div>
      <h2>String Value: {stringValue}</h2>
      <button onClick={updateStringValue}>Update String</button>

      <h2>String Array:</h2>
      <ul>
        {stringArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItemToStringArray}>Add Item</button>
      <button onClick={removeItemFromStringArray}>Remove Last Item</button>

      <h2>Number Value: {numberValue}</h2>
      <button onClick={updateNumberValue}>Update Number</button>

      <h2>Number Array:</h2>
      <ul>
        {numberArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItemToNumberArray}>Add Item</button>
      <button onClick={removeItemFromNumberArray}>Remove Last Item</button>

      <h2>Object Value: {JSON.stringify(objectValue)}</h2>
      <button onClick={updateObjectValue}>Update Object</button>

      <h2>Object Array:</h2>
      <ul>
        {objectArray.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
      <button onClick={updateObjectArray}>Update Object Array</button>

      <h2>Boolean Value: {booleanValue ? "True" : "False"}</h2>
      <button onClick={toggleBooleanValue}>Toggle Boolean</button>

      <h2>Boolean Array:</h2>
      <ul>
        {booleanArray.map((item, index) => (
          <li key={index}>
            <button onClick={() => toggleBooleanValueInArray(index)}>
              {item ? "True" : "False"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateTypesExample;
