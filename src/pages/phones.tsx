import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export type PhoneType = {
  id: string;
  brand: string;
  model: string;
  storage: string;
  color: string;
  price: number;
};

const Phones = () => {
  const [data, setData] = useState<PhoneType[]>([]);

  const getData = () => {
    fetch("http://localhost:3000/phones")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        console.log(res);
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteData = (id: string) => {
    fetch(`http://localhost:3000/phones/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editData = (id: string, values: PhoneType) => {
    fetch(`http://localhost:3000/phones/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <NavLink to={"new"}>
          {" "}
          <h3>Add new phone</h3>
        </NavLink>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>Storage</th>
              <th>Color</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((phone) => {
              const { brand, color, id, model, price, storage } = phone;
              return (
                <>
                  <tr key={id}>
                    <td>{brand}</td>
                    <td>{model}</td>
                    <td>{storage}</td>
                    <td>{color}</td>
                    <td>{price}</td>
                    <td>
                      <span>X</span>
                      <span>Edit</span>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      <button className="btn" onClick={() => deleteData("5364")}>
        Delete item
      </button>
      <button
        className="btn"
        onClick={() => {
          const data = {
            brand: "ofvirngourehgoi",
            color: "asd",
            id: "5364",
            model: "asdg",
            price: 325423,
            storage: "afjgnr",
          };
          editData("5364", data);
        }}
      >
        Edit data
      </button>
    </>
  );
};

export default Phones;
