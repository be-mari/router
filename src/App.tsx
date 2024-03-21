import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import NoMatch from "./pages/no-match";
import Mewtwo from "./pages/mewtwo";
import Cookies from "./pages/cookies";
import Country from "./pages/country";
import Flags from "./pages/flags";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="history" element={"History"} />
          </Route>
          <Route path="mewtwo" element={<Mewtwo />} />
          <Route path="country" element={<Country />} />
          <Route path="flags" element={<Flags />} />
          <Route path="cookies" element={<Cookies />} />

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
