import { carInfo } from "../data/car";

const CarInfo = () => {
  return (
    <>
      {carInfo.map((car) => {
        return (
          <div className="car-info">
            <h1>{car.title}</h1>
            <img className="car-info__img" src={car.imgUrl} alt={`${car.id}`} />
            <div className="car-info__text">{car.description}</div>
            <div className="car-info__versions">
              <img
                className="car-info__additional-img"
                src={car.versionsImg}
                alt={`${car.id} versions`}
              />
              <div className="car-info__versions__text">{car.versionsText}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CarInfo;
