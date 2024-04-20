import { useNavigate } from "react-router-dom";
import { gamesData } from "../data/games";

const Games = () => {
  const navigate = useNavigate();
  const goTo = (gameId: string) => {
    //redirect user to game routes
    navigate(gameId);
  };
  return (
    <>
      <div className="games__grid">
        {gamesData.map((game) => {
          return (
            <div onClick={() => goTo(game.id)} className="games__card">
              <div className="games__card">
                <img className="games__img" src={game.imgUrl} alt="" />
                <h2 className="games__name">{game.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Games;
