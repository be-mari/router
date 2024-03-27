import { useEffect, useState } from "react";
type PokemonType = {
  name: string;
  height: number;
  weight: number;
  order: number;
  sprites: {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
  };
  abilities: PokemonAbilityType[];
  types: PokemonTypeType[];
  moves: PokemonMovesType[];
};
type PokemonAbilityType = {
  ability: { name: string };
};
type PokemonTypeType = {
  type: {
    name: string;
  };
};
type PokemonMovesType = {
  move: {
    name: string;
    url: string;
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
          <div className="container mewtwo">
            <h1>
              #{pokemonData.order} | {pokemonData.name}{" "}
            </h1>
            <div>
              <span className="container__highlight">Height:</span>{" "}
              {pokemonData.height} inches
            </div>

            <div>
              <span className="container__highlight">Weight: </span>
              {pokemonData.weight} kg
            </div>
            <div>
              <span className="container__highlight">Abilities: </span>
              {pokemonData.abilities.map((ability, index) => {
                return <span key={index}>{ability.ability.name}</span>;
              })}
            </div>
            <div>
              <span className="container__highlight">Moves: </span>
              {pokemonData.moves
                .filter((_, index) => index <= 10)
                .map((moves, index) => {
                  return (
                    <span key={index}>
                      {moves.move.name}
                      {index < 10 ? ", " : ""}
                    </span>
                  );
                })}
              , etc.
            </div>
            <div>
              <span className="container__highlight">Types: </span>
              {pokemonData.types.map((type, index) => {
                return <span key={index}>{type.type.name} </span>;
              })}
            </div>

            <div className="mewtwo__images">
              <img
                src={pokemonData.sprites.front_default}
                alt={pokemonData.name + "picture"}
              />
              <img
                src={pokemonData.sprites.back_default}
                alt={pokemonData.name + "picture"}
              />
              <img
                src={pokemonData.sprites.front_shiny}
                alt={pokemonData.name + "picture"}
              />
              <img
                src={pokemonData.sprites.back_shiny}
                alt={pokemonData.name + "picture"}
              />
            </div>
          </div>
        </>
      ) : (
        "Sorry, can't find data."
      )}{" "}
    </>
  );
};
export default Mewtwo;
