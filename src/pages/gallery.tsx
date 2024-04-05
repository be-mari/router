import { useState } from "react";
import { TravelType, travelData } from "../data/travel-data";
import IconDelete from "../assets/delete";
import IconClose from "../assets/close";

const Gallery = () => {
  const [data, setData] = useState<TravelType[]>(travelData);
  const [selectedTravel, setSelectedTravel] = useState<TravelType | null>(null);

  const handleSelectedTravel = (travel: TravelType) => {
    setSelectedTravel(travel);
  };

  const handleDelete = (id: string) => {
    const newState = data.filter((item) => item.id !== id);
    setData(newState);
    setSelectedTravel(null); // Deselect after deletion
  };

  return (
    <>
      <h1>Travelling gallery</h1>
      <hr />
      <div className="gallery">
        {data.map((destination) => (
          <img
            className="gallery__img"
            src={destination.imgUrl}
            alt={`${destination.name} image`}
            key={destination.id}
            onClick={() => handleSelectedTravel(destination)}
          />
        ))}
      </div>

      {selectedTravel && (
        <>
          <div className="gallery__modal">
            <div
              className="gallery__delete"
              onClick={() => handleDelete(selectedTravel.id)}
            >
              <IconDelete />
            </div>
            <div
              className="gallery__close"
              onClick={() => setSelectedTravel(null)}
            >
              <IconClose />
            </div>
            <div className="gallery__info">
              <h2>{selectedTravel.name}</h2>
              <p>Color: {selectedTravel.color}</p>
              <p>Price: €{selectedTravel.price}</p>
              <p>Sunny: {selectedTravel.sunny ? "🌞" : "🌧"}</p>
            </div>
            <img src={selectedTravel.imgUrl} alt={selectedTravel.name} />
          </div>
          <div
            className="gallery__overlay"
            onClick={() => setSelectedTravel(null)}
          ></div>
        </>
      )}
    </>
  );
};

export default Gallery;
