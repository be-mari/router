import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import NoMatch from "./pages/no-match";
import Mewtwo from "./pages/mewtwo";
import Country from "./pages/country";
import Cookies from "./pages/cookies";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mewtwo" element={<Mewtwo />} />
          <Route path="country" element={<Country />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="about" element={<About />}>
            <Route path="history" element={"History"} />
          </Route>
          <Route path="contact" element={<Contact />} />

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
