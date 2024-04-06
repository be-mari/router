import { useState } from "react";
import IconArrowTopRight from "../assets/icon-arrow-top-right";
import EllipsisHorizontal from "../assets/icon-ellipsis-horizontal";
import IconPlus from "../assets/plus";
import Button from "../components/button-home";
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

type News = string[];

const information: News = [
  "Donec volutpat fringilla lorem, tempus faucibus elit sollicitudin ut. Integer mattis fermentum ultrices. Integer augue ligula, consequat at diam et, suscipit mattis libero. Maecenas porta, neque a sodales feugiat, nulla dolor feugiat orci, vitae laoreet sapien urna et ex. Vivamus a vestibulum lorem. Quisque a fermentum felis. Pellentesque semper molestie.",
  "In ullamcorper dignissim sollicitudin. Fusce sit amet dui fermentum, eleifend sapien at, eleifend dui. Nullam laoreet ante id sem mattis, nec molestie ex scelerisque. Pellentesque cursus varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vel magna vitae ex tempor dignissim non ut.",
  "Integer venenatis blandit velit sed accumsan. Nunc convallis elementum gravida. Suspendisse rhoncus purus sed dictum semper. Nulla in odio vel lacus mollis pulvinar sit amet sit amet velit. Proin porttitor rhoncus est ac dapibus. Aenean est metus, pharetra eget posuere at, consectetur et lacus. Praesent imperdiet euismod ornare. Phasellus tincidunt.",
];

const Home = () => {
  const [selectedHeadline, setSelectedHeadline] = useState<number | null>(null);

  const handleHeadlineClick = (index: number) => {
    setSelectedHeadline(index);
  };

  return (
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
          <Button color="blue">
            <EllipsisHorizontal />
          </Button>
          <Button color="blue">Hire me!</Button>
          <Button color="blue">
            <IconPlus /> Follow
          </Button>
        </div>
      </div>
      <div className="home__body">
        <div className="home__body__pannel">
          <h3 className="home__body__title">Experience</h3>
          {data.experience}
          <h3 className="home__body__title">About me</h3>
          {data.aboutMe}
        </div>

        <div className="home__body__pannel">
          <h4 className="home__body__subtitle">Skills</h4>
          <div className="tag__wrapper">
            {data.skills.map((skill) => {
              return <Tag>{skill}</Tag>;
            })}
          </div>
          <h4 className="home__body__subtitle">Location</h4>
          <div className="home__body__location">
            <img width={20} src="src/assets/croatia.png" alt="" />
            <span>{data.city}</span>, {data.country}
          </div>
          <h4>Links</h4>
          <div className="links">
            {Object.keys(data.links).map((key) => {
              return (
                <>
                  <a href={data.links[key]} key={key} target="_blank">
                    <IconArrowTopRight width={16} />
                    {key}
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="home__news">
        {information.map((news, index) => {
          return (
            <div
              className={`home__news__headline ${
                selectedHeadline === index ? "home__news__headline--active" : ""
              }`}
              key={index}
              onClick={() => handleHeadlineClick(index)}
            >
              Title {index + 1}
            </div>
          );
        })}

        {selectedHeadline == null ? (
          <div className="home__news__information">
            Click headline to check the news!
          </div>
        ) : (
          <div className="home__news__information">
            {information[selectedHeadline]}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
