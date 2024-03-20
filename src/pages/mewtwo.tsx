import { useEffect, useState } from "react";
type PokemonType = {
  name: string;
  height: number;
  order: number;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  abilities: PokemonAbilityType[];
  types: PokemonTypeType[];
};
type PokemonAbilityType = {
  ability: { name: string };
};
type PokemonTypeType = {
  type: {
    name: string;
  };
};
const Mewtwo = () => {
  const [pokemonData, setPokemonData] = useState<PokemonType | null>(null);
  const getData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/mewtwo")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPokemonData(data);
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
      {pokemonData ? (
        <>
          <h1>
            #{pokemonData.order} | {pokemonData.name}{" "}
          </h1>
          <div>
            <div>
              Abilities:{" "}
              {pokemonData.abilities.map((ability, index) => {
                return <span key={index}>{ability.ability.name}</span>;
              })}
            </div>
            <div>Height: {pokemonData.height} inches.</div>
            <div>
              Types:{" "}
              {pokemonData.types.map((type, index) => {
                return <span key={index}>{type.type.name} </span>;
              })}
              ;
            </div>
          </div>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name + "picture"}
          />
        </>
      ) : (
        "Ne možemo pronaći podatke"
      )}{" "}
    </>
  );
};
export default Mewtwo;
