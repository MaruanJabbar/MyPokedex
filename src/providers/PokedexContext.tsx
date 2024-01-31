import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import jsonData from "../data/pokemonData.json";

interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: string[];
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
