import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Vjezbe from "./pages/vjezbe";
import Practice from "./pages/practice";
import Homework from "./pages/homework";
import AboutPokemons from "./pages/about-pokemons";
import Mewtwo from "./pages/mewtwo";
import Flags from "./pages/flags";
import Croatia from "./pages/croatia";
import Profile from "./pages/profile";
import NoMatch from "./pages/no-match";
import DataTypes from "./pages/data-types";
import Gallery from "./pages/gallery";
import { Tabs } from "./pages/tabs";
import Games from "./pages/games";
import GameInfo from "./pages/game-info";
import Cars from "./pages/cars";
import CarInfo from "./pages/car-info";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="data-types" element={<DataTypes />} />
          <Route path="practice" element={<Practice />} />
          <Route path="homework" element={<Homework />} />

          <Route path="vjezbe" element={<Vjezbe />} />
          <Route path="about-pokemons" element={<AboutPokemons />}>
            <Route path="history" element={"History"} />
          </Route>
          <Route path="mewtwo" element={<Mewtwo />} />
          <Route path="flags" element={<Flags />} />
          <Route path="croatia" element={<Croatia />} />
          <Route path="profile" element={<Profile />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="tabs" element={<Tabs />} />

          <Route path="games">
            <Route index element={<Games />} />
            <Route path=":gameId" element={<GameInfo />} />
          </Route>

          <Route path="cars">
            <Route index element={<Cars />} />
            <Route path=":carId" element={<CarInfo />} />
          </Route>

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
