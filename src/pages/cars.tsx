type CarType = {
  id: string;
  icon: string;
  title: string;
  text: string;
};

const data: CarType[] = [
  {
    id: "sedans",
    icon: "git-vjezba/src/assets/car-1.svg",
    text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    title: "Sedans",
  },
  {
    id: "suvs",
    icon: "git-vjezba/src/assets/car-2.svg",
    text: "Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.",
    title: "Suvs",
  },
  {
    id: "luxury",
    icon: "git-vjezba/src/assets/car-3.svg",
    text: "Cruise in the best car brands without thr bloathed prices. Enjoy enhanced comfort of a luxury rental and arrive in style.",
    title: "Luxury",
  },
];

const Cars = () => {
  return (
    <>
      {data.map((car, index) => {
        <div className="container">
          <div className={`car car--${index + 1}`}>
            <div className="car__icon">{car.icon}</div>
            <div className="car__title">{car.title}</div>
            <h1 className="car__title">{car.title}</h1>
            <div className="car__text">{car.text}</div>
            <button className="car__btn">Learn more</button>
          </div>
        </div>;
      })}
    </>
  );
};

export default Cars;
