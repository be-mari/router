import { useState } from "react";
import MovieRender from "../components/movie-render";
import { movieData, tabData } from "../data/movie";
import { tabType } from "../types/main";

export const Tabs = () => {
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
