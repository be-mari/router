import { useState } from "react";
import MovieRender from "../components/movie-render";

type tabType = {
  id: string;
  label: string;
};

const tabData: tabType[] = [
  { id: "1", label: "Home Alone" },
  { id: "2", label: "Home Alone 2" },
  { id: "3", label: "Home Alone 3" },
  { id: "4", label: "Home Alone 4" },
];

type CastType = {
  image: string;
  role: string;
  name: string;
};

export type MovieType = {
  id: string;
  name: string;
  year: string;
  genre: string[];
  imgUrl: string;
  cast: CastType;
};

const movieData: MovieType[] = [
  {
    id: "1",
    name: "Home Alone",
    year: "1990",
    genre: ["Comedy", "Action"],
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/hr/thumb/4/47/Home_alone.jpg/200px-Home_alone.jpg",
    cast: {
      image:
        "data:image/jpeg;base64,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",
      name: "Macaulay Culkin",
      role: "Kevin",
    },
  },
  {
    id: "2",
    name: "Home Alone 2",
    year: "1993",
    genre: ["Comedy", "Action"],
    imgUrl:
      "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTWL64RGJldZinViQCi-UEbU11s_o9gW5JfzHRnd7jhtIlON3GexcaGjELNRhXQKGJK",
    cast: {
      image:
        "data:image/jpeg;base64,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",
      name: "Daniel Stern",
      role: "Marv",
    },
  },
  {
    id: "3",
    name: "Home Alone 3",
    year: "1995",
    genre: ["Action"],
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cc/Home_Alone_3_film.jpg",
    cast: {
      image:
        "data:image/jpeg;base64,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",
      name: "Pesci",
      role: "Harry",
    },
  },
  {
    id: "4",
    name: "Home Alone 4",
    year: "1998",
    genre: ["Comedy"],
    imgUrl:
      "https://images.rtl.hr/media/images/884xX/Nov2023/f12012da64407d7fada3_893335.jpg?v=9e05&fop=fp:0.42:0.44",
    cast: {
      image:
        "data:image/jpeg;base64,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",
      name: "Catherine Anne O'Hara",
      role: "Kate",
    },
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<tabType>(tabData[0]);

  return (
    <>
      <div className="tab">
        {tabData.map((tab) => {
          return (
            <div
              key={tab.id}
              className={`tab__item ${tab.id === activeTab.id ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      <div className="tab__content">
        <MovieRender
          movie={movieData.find((movie) => {
            return activeTab.id === movie.id;
          })}
        />
      </div>
    </>
  );
};
export default Tabs;
