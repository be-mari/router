import { useState } from "react";
import Grid from "../components/grid";

type TravelType = {
  imgUrl: string;
  name: string;
  color: string;
  price: number;
  sunny: boolean;
};

const dataTravelType: TravelType[] = [
  {
    imgUrl:
      "https://img.freepik.com/free-photo/beautiful-collage-travel-concept_23-2149232169.jpg?t=st=1711651624~exp=1711655224~hmac=0b360c3a9a3954e4e5cb683ea933d506d8710f33351c19bf5247fd8dc4e03bc4&w=740",
    name: "Suitcase",
    color: "yellow",
    price: 100,
    sunny: false,
  },
  {
    imgUrl:
      "https://img.freepik.com/free-photo/vertical-shot-palm-trees-sandy-beach_181624-49124.jpg?t=st=1711651651~exp=1711655251~hmac=5bb53fabfef87b1a92d7f06ce82cc075489e25d09373b7fbc239ec24c0685bff&w=740",
    name: "Seaside",
    color: "blue",
    price: 1000,
    sunny: true,
  },
  {
    imgUrl:
      "https://img.freepik.com/free-photo/man-sits-end-trolltunga-before-mountains_1304-5318.jpg?t=st=1711651676~exp=1711655276~hmac=33e25f2c65ad50c20c7a91d3c7115813c6e39eb73131fc953e176fbec83a94ef&w=826",
    name: "Mountain",
    color: "gray",
    price: 1500,
    sunny: false,
  },
  {
    imgUrl:
      "https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?t=st=1711654400~exp=1711658000~hmac=82dd98aa296fe614a1c3e26dba63fb8506630217a998437554766bf64771116d&w=1380",
    name: "HAB",
    color: "colorful",
    price: 500,
    sunny: true,
  },
];

const Gallery = () => {
  const [selectedTravel, setSelectedTravel] = useState<TravelType | null>(null);
  const handleClick = (travel: TravelType) => {
    setSelectedTravel(travel);
  };

  const handleDelete = (id: string) => {
    const newState = data.filter((item) => item.id !== id);
    setData(newState);
  };

  return (
    <>
      <h1>Gallery</h1>
      <Grid>
        {dataTravelType.map((destination, index) => {
          return (
            <img
              className="traveling"
              src={destination.imgUrl}
              key={index}
              onClick={() => handleClick(destination)}
            />
          );
        })}
      </Grid>
      <div className="traveling__active">
        {selectedTravel && (
          <div>
            <img src={selectedTravel.imgUrl} className="" alt="" />
            <h2>{selectedTravel.name}</h2>
            <p>Color: {selectedTravel.color}</p>
            <p>Price: €{selectedTravel.price}</p>
            <p>Sunny: {selectedTravel.sunny ? "🌞" : "🌧"}</p>
            <div>X</div>
            <div className="icon-delete">
              <img
                src="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                alt="delete"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// filter, find, map, for each!!!

export default Gallery;
