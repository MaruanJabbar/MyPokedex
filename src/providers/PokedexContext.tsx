import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import jsonData from "../data/data.json";

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  image: string;
}

interface PokedexContextProps {
  pokedex: Pokemon[];
  setPokedex: Dispatch<SetStateAction<Pokemon[]>>;
}

const defaultValues: PokedexContextProps = {
  pokedex: [],
  setPokedex: () => {},
};

export const PokedexContext = createContext<PokedexContextProps>(defaultValues);

interface PokedexProviderProps {
  children: ReactNode;
}

export const PokedexProvider: React.FC<PokedexProviderProps> = ({
  children,
}) => {
  const [pokedex, setPokedex] = useState<Pokemon[]>(jsonData as Pokemon[]);

  return (
    <PokedexContext.Provider value={{ pokedex, setPokedex }}>
      {children}
    </PokedexContext.Provider>
  );
};

export const usePokedexContext = (): PokedexContextProps =>
  useContext(PokedexContext);
