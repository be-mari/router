import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <h2>About</h2>
      </div>
      <Outlet />
    </>
  );
};
export default About;
