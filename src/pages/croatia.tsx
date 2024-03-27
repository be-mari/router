import { useEffect, useState } from "react";

type CountryType = {
  name: NameType;
  flags: flagType;
  coatOfArms: CoatOfArmsType;
  continents: string[];
  unMember: boolean;
  borders: string[];
  capital: string;
  population: number;
  currencies: CurrenciesType;
};

type NameType = {
  common: string;
  nativeName: NativeNameType;
  official: string;
};

type NativeNameType = {
  hrv: { common: string; official: string };
};

type flagType = {
  alt: string;
  png: string;
  svg: string;
};

type CoatOfArmsType = {
  png: string;
};

type CurrenciesType = {
  EUR: EuroType;
};

type EuroType = { name: string; symbol: string };

const Country = () => {
  const [countryData, setCountryData] = useState<CountryType>();

  const getData = async () => {
    await fetch("https://restcountries.com/v3.1/name/croatia")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res[0]);
        setCountryData(res[0]);
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
      <div className="container">
        <div className="heading">
          Native name:{" "}
          <span className="heading__data">
            {countryData?.name.nativeName.hrv.official} (
            {countryData?.name.nativeName.hrv.common})
          </span>
        </div>
        <div className="heading">
          Official name:{" "}
          <span className="heading__data">
            {countryData?.name.official} ({countryData?.name.common})
          </span>
        </div>
        <img
          className="img"
          src={countryData?.flags.png}
          alt={"flag: " + countryData?.name.common}
        />
        <div className="heading__flag">
          {countryData?.flags.alt} <br />
          Look below for more details:
        </div>
        <img
          className="img"
          src={countryData?.coatOfArms.png}
          alt={"coat of arms: " + countryData?.name.common}
        />

        <div className="heading">
          Continent:{" "}
          <span className="heading__data">{countryData?.continents}</span>
        </div>
        <div className="heading">
          EU member:{" "}
          <span className="heading__data">
            {countryData?.unMember ? "✔" : "❌"}
          </span>
        </div>
        <div className="heading">
          Borders with:{" "}
          <span className="heading__data">
            {countryData?.borders.join(", ")}
          </span>
        </div>
        <div className="heading">
          Capital:{" "}
          <span className="heading__data">{countryData?.capital} </span>
        </div>
        <div className="heading">
          Population:{" "}
          <span className="heading__data">{countryData?.population} </span>
        </div>
        <div className="heading">
          Currency:{" "}
          <span className="heading__data">
            {countryData?.currencies.EUR.name} (
            {countryData?.currencies.EUR.symbol})
          </span>
        </div>
      </div>
    </>
  );
};

export default Country;
