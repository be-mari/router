import { useEffect, useState } from "react";

type CountryType = {
  flags: {
    png: string;
  };
};

const defaultFlagUrl =
  "https://img.freepik.com/premium-photo/world-map-with-all-states-their-flags-3d-render_665346-24147.jpg?w=740";

const Flags = () => {
  const [countryName, setCountryName] = useState<string>("");
  const [country, setCountry] = useState<CountryType | undefined>(undefined);

  const getData = async (countryName: string) => {
    await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((data) => {
        return data.json();
      })
      .then((res: CountryType[]) => {
        setCountry(res[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(countryName);
  }, [countryName]);

  return (
    <>
      <div className="container flags">
        <div>
          <input
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
              getData(countryName);
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
