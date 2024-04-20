import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GameType } from "../types/main";
import { gamesData } from "../data/games";

const GameInfo = () => {
  const { gameId } = useParams();
  const [data, setData] = useState<GameType>();

  const getGameInfo = () => {
    const game = gamesData.find((game) => {
      return game.id === gameId;
    });
    setData(game); // spremili smo varijablu u state da ju možemo koristitit u komponenti
  };

  useEffect(() => {
    getGameInfo();
  }, []); // dohvaćamo samo prvi puta

  return (
    <>
      {/* // ako ne nađemo podatke u gametype ?
      <div>
        <img src={data?.imgUrl} alt="" />
        <div>{data?.name}</div>
      </div> */}

      {data ? (
        <>
          <div className="game">
            <img className="game--left" src={data.imgUrl} alt="game cover" />
            <div className="game--right">
              <div>{data.name}</div>
              <div>{data.developer}</div>
              <div>Online Pvp: {data.onlinePvP ? "yes" : "no"}</div>
              <div>
                <b>{data.price}$</b>
              </div>
              <div>{data.rating}</div>
              <div className="game__text">Genre: {data.genre}</div>
              <div className="game__text">
                Platforms: {data.platforms.join(", ")}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          Igrica s nazivom <b>{gameId}</b> ne postoji u našoj bazi podataka 😢
        </div>
      )}
    </>
  );
};

export default GameInfo;
