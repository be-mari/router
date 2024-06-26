import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Select from "react-select";
import Button from "../components/button";
import {
  ActivePokemonType,
  OptionType,
  PokemonType,
  PokemonsResponseType,
} from "../types/main";

const options: OptionType[] = [
  { value: "10", label: "10 Pokemona" },
  { value: "20", label: "20 Pokemona" },
  { value: "100", label: "100 Pokemona" },
];

const defaultLimit = "10";

const AboutPokemons = () => {
  const [data, setData] = useState<PokemonType[]>([]);
  const [limit, setLimit] = useState<string | undefined>("10");
  const [activePokemon, setActivePokemon] = useState<
    ActivePokemonType | undefined
  >(undefined);

  const getData = async (limit: string | undefined) => {
    await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit ? limit : defaultLimit}`
    )
      .then((data) => {
        return data.json();
      })
      .then((res: PokemonsResponseType) => {
        setData(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPokemonData = async (pokemon: string) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((data) => {
        return data.json();
      })
      .then((res: ActivePokemonType) => {
        setActivePokemon(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(limit);
  }, [limit]);

  return (
    <>
      <div>AboutPokemons</div>

      <div>
        <h1>Pokemon</h1>
        <Select
          onChange={(e) => {
            //getData(e?.value);
            setLimit(e?.value);
          }}
          options={options}
        />
        <div>
          {data.map((pokemon) => {
            return (
              <Button
                onClick={(e) => {
                  const test = e.target as HTMLButtonElement;
                  getPokemonData(test.innerHTML);
                }}
                key={pokemon.name}
              >
                {pokemon.name}
              </Button>
            );
          })}
        </div>
        <div>
          <img src={activePokemon?.sprites.front_default} alt="" />
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default AboutPokemons;
