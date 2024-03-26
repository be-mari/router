import { useState } from "react";

type ProfileType = {
  name: string;
  lastName: string;
  age: number;
  gender: boolean;
  profilePicture?: string;
};

type BookType = {
  title: string;
  author: string;
  pages: string;
  hardCovers: boolean;
};

const defaultProfileValues: ProfileType = {
  age: 35,
  gender: true,
  lastName: "Bla",
  name: "Ma",
  profilePicture:
    "https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c=",
};

const DataTypes = () => {
  const [name, setName] = useState<string>("");
  const [names, setNames] = useState<string[]>(["Name1", "Name2"]);
  const [homeNumber, setHomeNumber] = useState<number>(0);
  const [grades, setGrades] = useState<number[]>([5, 1, 4, 1, 2, 3, 4, 1]);
  const [profile, setProfile] = useState<ProfileType>(defaultProfileValues); // u zagrade novu varijablu staviti, prvo ju kreirati iznad
  const [books, setBooks] = useState<BookType>([]);
  const [wc, setWc] = useState<boolean>(false);

  const plasticSurgery = () => {
    const newState = (ProfileType = {
      ...profile,
      gender: !profile.gender,
    });

    setProfile(newState);
  };

  const addBook = () => {
    const newState: BookType[] = [{title: "Petar Pan", author: "Nemam Pojma", hardCovers: false}]
    setBooks{[newBook]}
  }

  return (
    <>
      <h1>String</h1>
      <div>{name ? name : "Trenutno ime ne postoji. Molimo dodajte ime."}</div>
      <button
        onClick={() => {
          setName("Jelena");
        }}
      >
        Change name
      </button>
      <hr />
      <h1>Array Stringova</h1>
      <div>
        {names.length > 0
          ? names.map((name, index) => {
              return <div key={index}>{name}</div>;
            })
          : "Nema ništa u ovom nizu"}
        <button
          onClick={() => {
            const newState = [...names, "Jelena", "Katarina", "Marija"];
            setNames(newState);
          }}
        >
          Change names
        </button>
      </div>
      <hr />
      <h1>Number</h1>
      <div>{homeNumber > 0 ? homeNumber : "Kućni broj ne postoji"}</div>
      <button
        onClick={() => {
          setHomeNumber(50);
        }}
      >
        Change number
      </button>
      <hr />
      <h1>Number Array</h1>
      <div>
        {grades.length > 0
          ? grades.map((grade, index) => {
              return (
                <div key={index}>
                  {grade > 0 && grade < 6 && grade && "Nepostojeća ocjena"}
                </div>
              );
            })
          : "Nema ocjena"}
        <button
          onClick={() => {
            let newState: number[] = [];

            grades.forEach((grade) => {
              if (grade > 1) {
                return grade;
                newState.push(grade);
              }
            });
            console.log(newState);
            setGrades(newState);
          }}
        >
          Obriši sve jedinice
        </button>
      </div>
      <hr />
      <h1>Objekt</h1>
      <div>
        <img src={profile.profilePicture} alt="Profile Picture" />
        <div>
          {profile.name}&nbsp;{profile.lastName}, {profile.age}
        </div>
        <div>{!profile.gender ? "male" : "female"}</div>
        <button onClick={() => plasticSurgery()}>Change gender</button>
      </div>

      <hr />
      <h1>Array objekata</h1>
      <div>
        {books.length > 0
          ? books.map((book) => {
              <>
                <div key={book.title}>
                  {book.title}, {book.author}
                </div>
                <div> broj stranica: {book.pages}</div>
                <div>tvrde korice: {book.hard.covers ? "da" : "ne"}</div>
              </>;
            })
          : "Trenutno ne postoji niti jedna knjiga za prikaz"}
        <button onClick={addBook}>Dodaj knjigu</button>
      </div>
      <hr />
      <h1>Boolean</h1>
      <div>{wc ? "ima ga" : "nema ga"}</div>
      <button onClick={()=>{setWc(!wc)}}>Call Toi Toi</button>
    </>
  );
};
export default DataTypes;
