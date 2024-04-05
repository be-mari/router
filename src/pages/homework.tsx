import { useState } from "react";
import Button from "../components/button";

type EmployeeType = {
  name: string;
  lastName: string;
  experience: number;
  drivingLicence: boolean;
};

const defaultEmployee = {
  name: "Ivana",
  lastName: "Horvat",
  experience: 10,
  drivingLicence: true,
};

const Homework = () => {
  //String
  const [myString, setMyString] = useState<string>("Homework");
  const [isMouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };
  //String Array
  const [shoppingItems, setShoppingItems] = useState<string[]>([
    "Chocolate",
    "Gin",
  ]);
  const [inputValue, setInputValue] = useState<string>("");

  //Number
  const [myNumber, setMyNumber] = useState<number>(0);

  //Number Array
  const [myNumberArr, setMyNumberArr] = useState<number[]>([1, 2, 3]);

  //Object
  const [employeeName, setEmployeeName] = useState<string>("");
  const [employeeData, setEmployeeData] =
    useState<EmployeeType>(defaultEmployee);

  //Boolean
  const [myBoolean, setMyBoolean] = useState<boolean>(true);

  // Boolean Array
  const [booleanArray, setBooleanArray] = useState<boolean[]>([
    true,
    false,
    true,
  ]);

  /// Boolean Array Function
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
      <button
        className="btn"
        style={{
          backgroundColor: isMouseOver ? "black" : "",
          color: isMouseOver ? "white" : "",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => {
          setMyString("Torture 🤣");
        }}
      >
        Homework
      </button>

      <hr />

      {/* String Array */}

      <h2>String Array:</h2>
      <ul className="no-bullets">
        {shoppingItems.map((item, index) => (
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
        <Button
          onClick={() => {
            setShoppingItems([...shoppingItems, inputValue]);
            setInputValue("");
          }}
        >
          Add Item
        </Button>
        <Button
          onClick={() => {
            if (shoppingItems.length > 0) {
              const newArray = [...shoppingItems];
              newArray.pop();
              setShoppingItems(newArray);
            }
          }}
        >
          Remove Last Item
        </Button>
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
        <Button
          onClick={() => {
            const numericValue = parseInt(inputValue, 10);
            if (!isNaN(numericValue)) {
              setMyNumberArr([...myNumberArr, numericValue]);
              setInputValue("");
            }
          }}
        >
          Add Item
        </Button>
        <Button
          onClick={() => {
            if (myNumberArr.length > 0) {
              const newNumArray = [...myNumberArr];
              newNumArray.pop();
              setMyNumberArr(newNumArray);
            }
          }}
        >
          Remove Last Item
        </Button>
      </div>

      <hr />

      {/* Object */}
      <h2>Object</h2>
      <input
        type="text"
        placeholder="Employee's name, e.g. Ivana"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />
      <Button
        onClick={() => {
          // You need to implement logic to fetch employee data based on the name
          // For now, setting defaultEmployee if no matching employee is found
          const foundEmployee = null; // Replace null with your logic
          setEmployeeData(foundEmployee || defaultEmployee);
        }}
      >
        Display employee's data
      </Button>
      {employeeData && (
        <div>
          <p>Name: {employeeData.name}</p>
          <p>Last Name: {employeeData.lastName}</p>
          <p>Experience: {employeeData.experience} years</p>
          <p>Driving Licence: {employeeData.drivingLicence ? "🚗" : "🚫"}</p>
        </div>
      )}
      <hr />

      {/* Boolean */}
      <h2>Boolean</h2>
      <p>Please select correct answers.</p>
      <div className="boolean__q">This is super simple.</div>
      <div className="boolean__a">{myBoolean ? "true" : "false"}</div>
      <Button
        onClick={() => {
          setMyBoolean((prevValue) => !prevValue);
        }}
      >
        Is it true?
      </Button>
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
