import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction, useEffect } from "react";
import { Pokemon } from "./PokedexContext";

interface FavoriteContextProps {
  favoriteList: number[];
  setFavoriteList: Dispatch<SetStateAction<number[]>>;
  addFavorite: (pokemon: Pokemon) => void;
  removeFavorite: (pokemon: Pokemon) => void;
}

const defaultValues: FavoriteContextProps = {
  favoriteList: [],
  setFavoriteList: () => {},
  addFavorite: () => {},
  removeFavorite: () => {},
};

export const FavoriteContext = createContext<FavoriteContextProps>(defaultValues);

interface FavoriteProviderProps {
  children: ReactNode;
}

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState<number[]>([]);

  useEffect(() => {
    const storedFavoriteList = localStorage.getItem("favoriteList");
    if (storedFavoriteList) {
      const parsedList = JSON.parse(storedFavoriteList) as number[];
      setFavoriteList(parsedList);
    }
  }, []);
  
  const addFavorite = (pokemon: Pokemon): void => {
    const isPokemonInList = favoriteList.find((favPokemon) => favPokemon === pokemon.id);

    if (!isPokemonInList) {
      const newList = [...favoriteList, pokemon.id].sort((a, b) => a - b);
      setFavoriteList(newList);
      localStorage.setItem("favoriteList", JSON.stringify(newList));
    } else {
      console.log("Pokemon já está na lista de favoritos");
    }
  };

  const removeFavorite = (pokemon: Pokemon): void => {
    const isPokemonInList = favoriteList.find((favPokemon) => favPokemon === pokemon.id);

    if (isPokemonInList) {
      const newList = favoriteList.filter((favPokemon) => favPokemon !== pokemon.id);
      setFavoriteList(newList);
      localStorage.setItem("favoriteList", JSON.stringify(newList));
    } else {
      console.log("Pokemon não está na lista de favoritos");
    }
  };

  return (
    <FavoriteContext.Provider value={{ favoriteList, setFavoriteList, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = (): FavoriteContextProps => useContext(FavoriteContext);
