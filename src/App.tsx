import Layout from "./components/layout";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <>
      <Layout>
        <h1>Nešto</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Layout>
      <Header />
    </>
  );
};

export default App;
