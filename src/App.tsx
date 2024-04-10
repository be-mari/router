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

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tabs" element={<Tabs />} />
          <Route path="data-types" element={<DataTypes />} />
          <Route path="vjezbe" element={<Vjezbe />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="practice" element={<Practice />} />
          <Route path="homework" element={<Homework />} />
          <Route path="about-pokemons" element={<AboutPokemons />}>
            <Route path="history" element={"History"} />
          </Route>
          <Route path="mewtwo" element={<Mewtwo />} />
          <Route path="croatia" element={<Croatia />} />
          <Route path="flags" element={<Flags />} />
          <Route path="profile" element={<Profile />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
