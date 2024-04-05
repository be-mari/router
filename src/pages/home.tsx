import IconAdd from "../assets/add";
import IconDots from "../assets/dots";
import Button from "../components/button";
import Tag from "../components/tag";

type ProfileDataType = {
  firstName: string;
  lastName: string;
  about: string;
  skills: string[];
  country: string;
  city: string;
  experience: string;
  aboutMe: string;
  links: {
    [name: string]: string;
  };
  email: string;
};

const data: ProfileDataType = {
  firstName: "Marija",
  lastName: "B",
  country: "Croatia",
  city: "Osijek",
  about: "Learning frontend development.",
  skills: ["HTML/CSS", "JS/TS", "React"],
  experience: "Loading...",
  aboutMe: "Something about me.",
  links: {
    W3: "https://www.w3schools.com/",
    MDN: "https://developer.mozilla.org/en-US/",
    stackOverflow: "https://stackoverflow.com/",
    flatUIcolors: "https://flatuicolors.com/?ref=pns/",
    figma: "https://www.figma.com/",
    gimp: "https://www.gimp.org/",
    googleFonts: "https://fonts.google.com/",
    freepic: "https://www.freepik.com/",
    unsplash: "https://unsplash.com/",
    heroIcons: "https://heroicons.com/",
    icomoon: "https://icomoon.io/",
    ionicons: "https://ionic.io/ionicons",
    patterns: "https://pattern.monster/",
    fontAwesome: "https://fontawesome.com/",
    behanceNet: "https://www.behance.net/",
    dribble: "https://dribbble.com/",
    frontendmentor: "https://www.frontendmentor.io/",
    codepen: "https://codepen.io/search/pens?q=",
    diagrams: "https://www.drawio.com/",
  },
  email: "name@sth.com",
};

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__top"></div>
        <div className="home__header">
          <img
            className="home__header__avatar"
            src={"src/assets/profile-img.jpg"}
            alt="Cover photo"
          />

          <div className="home__header__info">
            <div className="home__header__name ">
              {data.firstName} {data.lastName}
            </div>
            <div className="home__header__about ">{data.about}</div>
          </div>

          <div className="home__header__buttons">
            <button className="btn">...</button>
            <button className="btn">Hire me</button>
            <button className="btn">+ Folow</button>
          </div>
        </div>

        <div className="home__body">
          <div className="home__body__left">
            <h3>Experience</h3>
            {data.experience}
            <h3>About me</h3>
            {data.aboutMe}
          </div>
          <div className="home__body__right">
            <h4>Skills</h4>
            <div className="tag__wrapper">
              {data.skills.map((skill) => {
                return <Tag>{skill}</Tag>;
              })}
            </div>

            <h4>Location</h4>
            <div className="location__wrapper">
              <img width={20} src="src/assets/croatia.png" alt="" />
              <span>{data.city}</span>
              {data.country}
            </div>

            <h4>Links</h4>
            <div>{Object.keys(data)}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
