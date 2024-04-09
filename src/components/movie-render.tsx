import { MovieType } from "../pages/tabs";
import Tag from "./tag";

type Props = {
  movie: MovieType | undefined;
};

const MovieRender = ({ movie }: Props) => {
  return (
    <>
      {movie ? (
        <>
          <h2>{movie.name}</h2>
          <div>
            <b>{movie.year}</b>
          </div>
          <img className="img" src={movie.imgUrl} alt="movie cover" />
          <div className="cast">
            <img className="actor" src={movie.cast.image} alt="cast" />
            <div className="cast__data">
              <h2>{movie.cast.name}</h2>
              <h2>{movie.cast.role}</h2>
            </div>
          </div>
          <div className="tag__wrapper">
            {movie.genre.map((genre) => {
              return <Tag key={genre}>{genre}</Tag>;
            })}
          </div>
        </>
      ) : (
        <div>Za ovaj ID ne postoji niti jedan film u bazi</div>
      )}
    </>
  );
};
export default MovieRender;
