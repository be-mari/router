import { useParams } from "react-router-dom";
import { GameType, gamesData } from "./games";
import { useEffect, useState } from "react";

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
  }); // dohvaćamo samo prvi puta
  return (
    <>
      {/* // ako ne nađemo podatke u gametype ?
      <div>
        <img src={data?.imgUrl} alt="" />
        <div>{data?.name}</div>
      </div> */}
      {data ? (
        <>
          <div className="game__info">
            <img className="game__img" src={data.imgUrl} alt="" />
            <div>{data.name}</div>
            <div className="game__text">Genre: {data.genre}</div>
            <div className="game__text">
              Platforms: {data.platforms.join(", ")}
            </div>
          </div>
        </>
      ) : (
        <div>
          Igrica s nazivom
          {gameId} ne postoji u našoj bazi podataka
        </div>
      )}
    </>
  );
};

export default GameInfo;
