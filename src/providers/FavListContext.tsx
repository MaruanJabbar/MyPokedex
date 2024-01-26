import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction, useEffect } from "react";

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: { slot: number; type: { name: string } }[];
}

interface FavoriteContextProps {
  favoriteList: Pokemon[];
  setFavoriteList: Dispatch<SetStateAction<Pokemon[]>>;
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
  const [favoriteList, setFavoriteList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const loadFavoriteList = () => {
      const storedFavoriteList = localStorage.getItem("favoriteList");
      if (storedFavoriteList) {
        setFavoriteList(JSON.parse(storedFavoriteList));
      }
    };
    loadFavoriteList();
  }, []);

  const addFavorite = (pokemon: Pokemon): void => {
    const isPokemonInList = favoriteList.find((favPokemon) => favPokemon.id === pokemon.id);

    if (!isPokemonInList) {
      const newList = [...favoriteList, pokemon].sort((a, b) => a.id - b.id);
      setFavoriteList(newList);
      localStorage.setItem("favoriteList", JSON.stringify(newList));
    } else {
      console.log("Pokemon já está na lista de favoritos");
    }
  };

  const removeFavorite = (pokemon: Pokemon): void => {
    const newList = favoriteList.filter((favPokemon) => favPokemon.id !== pokemon.id).sort((a, b) => a.id - b.id);

    if (newList.length !== favoriteList.length) {
      setFavoriteList(newList);
      localStorage.setItem("favoriteList", JSON.stringify(newList));
    } else {
      console.log("Pokemon não encontrado na lista de favoritos");
    }
  };

  return (
    <FavoriteContext.Provider value={{ favoriteList, setFavoriteList, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = (): FavoriteContextProps => useContext(FavoriteContext);
