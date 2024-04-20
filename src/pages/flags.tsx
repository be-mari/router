import { useEffect, useState } from "react";
import Tag from "../components/tag";
import { FlagType } from "../types/main";

const defaultFlagUrl =
  "https://img.freepik.com/premium-photo/world-map-with-all-states-their-flags-3d-render_665346-24147.jpg?w=740";

const Flags = () => {
  const [countryName, setCountryName] = useState<string>("");
  const [country, setCountry] = useState<FlagType | undefined>(undefined);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const getData = async (countryName: string) => {
    await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((data) => {
        return data.json();
      })
      .then((res: FlagType[]) => {
        setCountry(res[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (buttonClicked) {
      getData(countryName);
      setButtonClicked(false);
    }
  }, [buttonClicked]);

  return (
    <>
      <div className="container flags">
        {buttonClicked && <Tag>Hello {countryName}</Tag>}

        <div>
          <input
            className="input"
            type="text"
            value={countryName}
            onChange={(e) => {
              setCountryName(e.target.value);
            }}
            placeholder="Enter country name"
          />
          <button
            className="btn"
            onClick={() => {
              setButtonClicked(true);
            }}
          >
            Get the flag
          </button>
        </div>

        <img
          className="img"
          src={country?.flags.png || defaultFlagUrl}
          alt="country's flag"
          style={{ width: "300px" }}
        />
      </div>
    </>
  );
};
export default Flags;
