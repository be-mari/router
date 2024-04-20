/// Components:
// Navigation
export type LinkType = {
  href: string;
  label: string;
};

/// Pages:
//About Pokemons
export type PokemonsResponseType = {
  count: number;
  next: string;
  results: PokemonType[];
};
export type ActivePokemonType = {
  sprites: {
    front_default: string;
  };
};
export type OptionType = {
  value: string;
  label: string;
};

// About Pokemons & Mewtwo
export type PokemonType = {
  name: string;
  height: number;
  weight: number;
  order: number;
  url: string;
  sprites: {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
  };
  abilities: PokemonAbilityType[];
  types: PokemonTypeType[];
  moves: PokemonMovesType[];
};

// Mewtwo
export type PokemonAbilityType = {
  ability: { name: string };
};
export type PokemonTypeType = {
  type: {
    name: string;
  };
};
export type PokemonMovesType = {
  move: {
    name: string;
    url: string;
  };
};

// Flags
export type FlagType = {
  flags: {
    png: string;
  };
};

// Croatia
export type CountryType = {
  name: NameType;
  flags: flagType;
  coatOfArms: CoatOfArmsType;
  continents: string[];
  unMember: boolean;
  borders: string[];
  capital: string;
  population: number;
  currencies: CurrenciesType;
};

export type NameType = {
  common: string;
  nativeName: NativeNameType;
  official: string;
};

export type NativeNameType = {
  hrv: { common: string; official: string };
};

export type flagType = {
  alt: string;
  png: string;
  svg: string;
};

export type CoatOfArmsType = {
  png: string;
};

export type CurrenciesType = {
  EUR: EuroType;
};

export type EuroType = { name: string; symbol: string };

// Tabs (Films)
export type tabType = {
  id: string;
  label: string;
};
export type CastType = {
  imageUrl: string;
  movieName: string;
  realName: string;
};
export type MovieType = {
  id: string;
  name: string;
  year: string;
  genre: string[];
  imgUrl: string;
  cast: CastType[];
};

// Games
export type GameType = {
  id: string;
  imgUrl: string;
  name: string;
  platforms: string[];
  genre: string;
  developer: string;
  rating: string;
  onlinePvP: boolean;
  price: number;
};

// Cars
export type CarType = {
  id: string;
  icon: string;
  title: string;
  text: string;
};

// car-info
export type CarInfoType = {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
  versionsImg: string;
  versionsText: string;
};
