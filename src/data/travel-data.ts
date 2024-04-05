export type TravelType = {
  id: string;
  imgUrl: string;
  name: string;
  color: string;
  price: number;
  sunny: boolean;
};

export const travelData: TravelType[] = [
  {
    id: "001",
    imgUrl:
      "https://img.freepik.com/free-photo/vertical-shot-palm-trees-sandy-beach_181624-49124.jpg?t=st=1711651651~exp=1711655251~hmac=5bb53fabfef87b1a92d7f06ce82cc075489e25d09373b7fbc239ec24c0685bff&w=740",
    name: "Seaside",
    color: "blue",
    price: 1000,
    sunny: true,
  },
  {
    id: "002",
    imgUrl:
      "https://img.freepik.com/free-photo/man-sits-end-trolltunga-before-mountains_1304-5318.jpg?t=st=1711651676~exp=1711655276~hmac=33e25f2c65ad50c20c7a91d3c7115813c6e39eb73131fc953e176fbec83a94ef&w=826",
    name: "Mountain",
    color: "gray",
    price: 1500,
    sunny: false,
  },
  {
    id: "003",
    imgUrl:
      "https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?t=st=1711654400~exp=1711658000~hmac=82dd98aa296fe614a1c3e26dba63fb8506630217a998437554766bf64771116d&w=1380",
    name: "HAB",
    color: "colorful",
    price: 500,
    sunny: true,
  },
  {
    id: "004",
    imgUrl:
      "https://img.freepik.com/free-photo/cultural-tourism_23-2147641193.jpg?w=360&t=st=1711664303~exp=1711664903~hmac=1876cad3e42fe11d548dbf93e57bc33b68b85f2364c723acf2fc338e304c2e95",
    name: "Heritage",
    color: "beige",
    price: 50,
    sunny: true,
  },
  {
    id: "005",
    imgUrl:
      "https://img.freepik.com/free-photo/enchanting-female-tourist-exploring-france-with-map_197531-6834.jpg?w=740&t=st=1711664307~exp=1711664907~hmac=b6c8eb2b8e5feb55b0caa7d5b427da2ac98484753f460744efd18adf70786499",
    name: "Sightseing",
    color: "red",
    price: 0,
    sunny: true,
  },
  {
    id: "006",
    imgUrl:
      "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-844.jpg?w=740&t=st=1711664309~exp=1711664909~hmac=10be14aa4b21b242ff2b5089ebc8f3c61977faa75e0ce3d2e122078dea7d203a",
    name: "Nature",
    color: "turquoise",
    price: 100,
    sunny: true,
  },
  {
    id: "007",
    imgUrl:
      "https://img.freepik.com/free-photo/girl-jumping-with-excitement-doorway-with-sea_181624-20834.jpg?w=360&t=st=1711664316~exp=1711664916~hmac=709cd6b1ef959e202905aac677de542f7ae1f30864859e1e734f3e20fee9c668",
    name: "Active",
    color: "blue",
    price: 150,
    sunny: false,
  },
  {
    id: "008",
    imgUrl:
      "https://img.freepik.com/free-photo/woman-holiday-journey-travel-relaxation_53876-42668.jpg?w=740&t=st=1711664320~exp=1711664920~hmac=4579fd5c1f8b5097fe45dab0c253facd5a2146102e0284ff2fcb9f2c4cfc39de",
    name: "Relaxation",
    color: "Green",
    price: 0,
    sunny: false,
  },
  {
    id: "009",
    imgUrl:
      "https://img.freepik.com/free-photo/beautiful-collage-travel-concept_23-2149232169.jpg?t=st=1711651624~exp=1711655224~hmac=0b360c3a9a3954e4e5cb683ea933d506d8710f33351c19bf5247fd8dc4e03bc4&w=740",
    name: "Plane Tickets",
    color: "yellow",
    price: 100,
    sunny: false,
  },
];
