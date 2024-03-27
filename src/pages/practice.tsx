import { useState } from "react";
import Button from "../components/button";

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
  pages: number;
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

const Practice = () => {
  const [name, setName] = useState<string>("");
  const [names, setNames] = useState<string[]>(["Name1", "Name2"]);
  const [homeNumber, setHomeNumber] = useState<number>(42);
  const [grades, setGrades] = useState<number[]>([5, 1, 4, 1, 2, 3, 4, 1]);
  const [profile, setProfile] = useState<ProfileType>(defaultProfileValues); // u zagrade novu varijablu staviti, prvo ju kreirati iznad
  const [books, setBooks] = useState<BookType[]>([]);
  const [wc, setWc] = useState<boolean>(false);

  const plasticSurgery = () => {
    const newState: ProfileType = {
      ...profile,
      gender: !profile.gender,
    };

    setProfile(newState);
  };

  const addBook = () => {
    const newState: BookType[] = [
      {
        title: "Petar Pan",
        author: "James Matthew Barrie",
        hardCovers: false,
        pages: 200,
      },
    ];
    setBooks(newState);
  };

  return (
    <>
      {/* String */}
      <h1>String</h1>
      <div>{name ? name : "Trenutno ime ne postoji. Molimo dodajte ime."}</div>
      <Button
        onClick={() => {
          setName("Jelena");
        }}
      >
        Change name
      </Button>
      <hr />

      {/* Array Stringova */}
      <h1>Array Stringova</h1>
      <div>
        {names.length > 0
          ? names.map((name, index) => {
              return <div key={index}>{name}</div>;
            })
          : "Nema ništa u ovom nizu. Dodajte bar jedno ime kako bismo ga vidjeli."}
        <Button
          onClick={() => {
            const newState = [...names, "Jelena", "Katarina", "Marija"];
            setNames(newState);
          }}
        >
          {" "}
          Change names
        </Button>
      </div>
      <hr />

      {/* Number */}
      <h1>Number</h1>
      <div>
        {homeNumber > 0
          ? homeNumber
          : "Kućni broj ne može biti nula ili manji od nule."}
      </div>
      <Button
        onClick={() => {
          setHomeNumber(50);
        }}
      >
        Change number
      </Button>
      <hr />

      {/* Number Array */}
      <h1>Number Array</h1>
      <div>
        {grades.length > 0
          ? grades.map((grade, index) => {
              return <div key={index}>{grade > 0 && grade < 6 && grade}</div>;
            })
          : "Nema ocjena"}
        <Button
          onClick={() => {
            let newState: number[] = [];

            grades.forEach((grade) => {
              if (grade > 1) {
                newState.push(grade);
              }
            });
            setGrades(newState);
          }}
        >
          Obriši sve jedinice
        </Button>
      </div>
      <hr />

      {/* Object */}
      <h1>Objekt</h1>
      <div>
        {profile.profilePicture ? (
          <img src={profile.profilePicture} width={50} alt="Profile Picture" />
        ) : undefined}
        <div>
          {profile.name}&nbsp;{profile.lastName}, {profile.age}
        </div>
        <div>{!profile.gender ? "👨🏻" : "👩🏻"}</div>
        <Button onClick={() => plasticSurgery()}>Change gender</Button>
      </div>
      <hr />

      {/* Objects Array */}
      <h1>Array objekata</h1>
      <div>
        {books.length > 0
          ? books.map((book) => {
              return (
                <>
                  <div key={book.title}>
                    {book.title}, {book.author}
                    <div> Broj stranica: {book.pages}</div>
                    <div>Tvrde korice: {book.hardCovers ? "da" : "ne"}</div>
                  </div>
                </>
              );
            })
          : "Trenutno ne postoji niti jedna knjiga za prikaz"}
        <Button onClick={addBook}>Dodaj knjigu</Button>
      </div>
      <hr />

      {/* Boolean */}
      <h1>Boolean</h1>
      <div>{wc ? "ima ga" : "nema ga"}</div>
      <Button
        onClick={() => {
          setWc(!wc);
        }}
      >
        Call Toi Toi
      </Button>
    </>
  );
};
export default Practice;
