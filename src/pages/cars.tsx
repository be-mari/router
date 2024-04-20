import { useNavigate } from "react-router-dom";
import { data } from "../data/car";

const Cars = () => {
  const navigate = useNavigate();
  const goTo = (carId: string) => {
    navigate(carId);
  };
  return (
    <>
      <div className="car">
        {data.map((car) => {
          return (
            <div className={`car__item car__item--${car.id}`}>
              <div>
                <img className="car__icon" src={car.icon} alt={`car icon`} />
                <div className={`car__circle car__circle--${car.id}`}></div>
              </div>
              <h1 className="car__title">{car.title}</h1>
              <div className="car__text">{car.text}</div>
              <button
                className={`car__btn car__btn--${car.id}`}
                onClick={() => goTo(car.id)}
              >
                Learn more
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cars;
