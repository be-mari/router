import { CarInfoType, CarType } from "../types/main";

export const data: CarType[] = [
  {
    id: "sedans",
    icon: "src/assets/car-sedans.svg",
    text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    title: "Sedans",
  },
  {
    id: "suvs",
    icon: "src/assets/car-suvs.svg",
    text: "Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.",
    title: "Suvs",
  },
  {
    id: "luxury",
    icon: "src/assets/car-luxury.svg",
    text: "Cruise in the best car brands without thr bloathed prices. Enjoy enhanced comfort of a luxury rental and arrive in style.",
    title: "Luxury",
  },
];

export const carInfo: CarInfoType[] = [
  {
    id: "sedan car",
    title: "What is a Sedan? Understanding the Classic Car Body Style",
    imgUrl:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228143146/559212.jpeg",
    description:
      "A sedan or saloon is a passenger car in a three-box configuration with separate compartments for an engine, passengers, and cargo. The first recorded use of sedan in reference to an automobile body occurred in 1912. The name derives from the 17th-century litter known as a sedan chair, a one-person enclosed box with windows and carried by porters. Variations of the sedan style include the close-coupled sedan, club sedan, convertible sedan, fastback sedan, hardtop sedan, notchback sedan, and sedanet.",
    versionsImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Three_body_styles_with_pillars_and_boxes.png/330px-Three_body_styles_with_pillars_and_boxes.png",
    versionsText:
      "Profiles of a sedan, station wagon and hatchback versions of the same model (a Ford Focus)",
  },
  {
    id: "suv car",
    title: "What is a SUV? Understanding the Classic Car Body Style",
    imgUrl:
      "https://s1.cdn.autoevolution.com/images/news/suvs-represent-more-than-half-of-all-car-sales-in-europe-what-does-that-tell-us-220931-7.jpg",
    description:
      "A sport utility vehicle (SUV) is a car classification that combines elements of road-going passenger cars with features from off-road vehicles, such as raised ground clearance and four-wheel drive. There is no commonly agreed-upon definition of an SUV and usage of the term varies between countries. Thus, it is a loose term that traditionally covers a broad range of vehicles with four-wheel drive. Some definitions claim that an SUV must be built on a light truck chassis; however, broader definitions consider any vehicle with off-road design features to be an SUV.",
    versionsImg:
      "https://di-uploads-pod30.dealerinspire.com/jerryseinerchevy/uploads/2023/10/chevy-suvs-by-size.png",
    versionsText:
      "There are many versions and types of SUV cars, but here are some: mini, compact, mid-size, full- size, extended-length and coupe.",
  },
  {
    id: "luxury car",
    title: "What is a luxury car? Understanding the Classic Car Body Style",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/RR_Phantom_V_James_Young_Sedanca_de_Ville.jpg/1280px-RR_Phantom_V_James_Young_Sedanca_de_Ville.jpg",
    description:
      "A luxury car is a car that provides above-average to high-end levels of comfort, features, and equipment. Often more expensive materials and surface finishes are used, and buyers expect better build quality. The usually higher pricing and more upscale appearance is often associated with higher social status of the users, compared to low and mid-market segment cars. The term is relative and partially subjective, reflecting both objective qualities of a car, as well as the projected and perceived image of the car marque. Luxury brands rank above premium brands, though there is no clear demarcation between the two.",
    versionsImg:
      "https://luxexpose.com/wp-content/uploads/2023/02/LuxExpose-Top_7_Luxury_Cars_To_Rent_In_Paris_1-.jpg",
    versionsText:
      "These are some market categories: subcompact executive / premium compact, compact executive / compact luxury, executive / mid-size luxury, luxury saloon / full-size luxury sedan, lltra-luxury, grand tourer, luxury SUV / crossover.",
  },
];
