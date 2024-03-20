import { useEffect, useState } from "react";

type CountryType = {
  flags: {
    png: string;
  };
};

const defaultFlagUrl =
  "https://media.istockphoto.com/id/1127492074/vector/all-world-flags-vector-icon-set.jpg?s=1024x1024&w=is&k=20&c=4lnczLJZxbdEB-n80LRvorAHXHaTS5mjWkFmhSuluc8=";

const Contact = () => {
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
          onClick={() => {
            getData(countryName);
          }}
        >
          Get the flag
        </button>
      </div>
      <img
        src={country?.flags.png || defaultFlagUrl}
        alt="country's flag"
        style={{ width: "300px" }}
      />
    </>
  );
};
export default Contact;
