import { GameType } from "../types/main";

export const gamesData: GameType[] = [
  {
    id: "gta-v",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    name: "gta v",
    genre: "Action-adventure",
    platforms: [
      "PlayStation 4",
      "PlayStation 5",
      "PlayStation 3",
      "Xbox 360",
      "Xbox One",
      "Xbox Series X i Series S",
      "Microsoft Windows",
    ],
    developer: "Rockstar Games",
    rating: "9/10",
    onlinePvP: true,
    price: 29,
  },
  {
    id: "Baldurs-Gate-3",
    imgUrl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg",
    name: "Baldur's Gate 3",
    genre: "Role-playing",
    platforms: [
      "PlayStation 5",
      "Xbox Series X i Series S",
      "Microsoft Windows",
      "GeForce Now",
      "Mac OS",
    ],
    developer: "Larian Studios",
    onlinePvP: false,
    price: 59,
    rating: "10/10",
  },
];
