import { MouseEvent, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Select from "react-select";

type PokemonResponseType = {
  count: number;
  next: string;
  results: PokemonType[];
};

type PokemonType = {
  name: string;
  url: string;
};

type ActivePokemonType = {
  aprites: {
    front_default: string;
  };
};

//items per page
type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "10", label: "10 Pokemona" },
  { value: "20", label: "20 Pokemona" },
  { value: "100", label: "100 Pokemona" },
];

const defaultLimit = "10";

const About = () => {
  const [data, setData] = useState<PokemonType[]>([]);
  const [limit, setLimit] = useState<number>(10);
  const [activePokemon, setActivePokemon] = useState<>;

  const getData = async (limit: string | undefined) => {
    await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit =${
        limit ? limit : defaultLimit
      }`
    )
      .then((data) => {
        return data.json();
      })
      .then((res: PokemonResponseType) => {
        setData(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPokemonData = async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/graveler`)
      .then((data) => {
        return data.json();
      })
      .then((res: PokemonResponseType) => {
        setData(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPokemonData = async (pokemon: string) => {
    await fetch(`https://pokeapi.co/api/v2/item/{id or name}/`)
      .then((data) => {
        return data.json();
      })
      .then((res: PokemonResponseType) => {
        setData(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getData(defaultLimit);

  useEffect(() => {
    getData(defaultLimit);
  }, []); // okida se kad se doda nešto u zagrade - ako stavimo setData i Data, imamo infinite loop

  return (
    <>
      <div>
        <h2> About</h2>
      </div>
      <div>
        <h1>Pokemon</h1>
        <Select
          onChange={(e) => {
            getData(e?.value);
          }}
          options={options}
        />
        <div>
          {data.map((pokemon) => {
            return (
              <button
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  const element = e.target as HTMLButtonElement;
                  const currentPokemon = element.innerHTML;
                  console.log(element.innerText);
                  getPokemonData();
                }}
                key={pokemon.name}
              >
                {pokemon.name}
              </button>
            );
          })}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default About;
