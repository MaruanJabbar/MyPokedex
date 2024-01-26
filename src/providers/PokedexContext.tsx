import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from "react";
import { api } from "../services";
import { AxiosResponse } from "axios";

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: { slot: number; type: { name: string } }[];
}

interface PokedexContextProps {
  pokedex: Pokemon[];
  setPokedex: Dispatch<SetStateAction<Pokemon[]>>;
  fetchData: (inicio: number, final: number) => Promise<void>;
}

const defaultValues: PokedexContextProps = {
  pokedex: [],
  setPokedex: () => {},
  fetchData: async () => {},
};

export const PokedexContext = createContext<PokedexContextProps>(defaultValues);

interface PokedexProviderProps {
  children: ReactNode;
}

export const PokedexProvider: React.FC<PokedexProviderProps> = ({ children }) => {
  const [pokedex, setPokedex] = useState<Pokemon[]>([]);

  const fetchData = async (inicio: number, final: number) => {
    const data: Pokemon[] = [];
    for (let i = inicio; i <= final; i++) {
      try {
        const response: AxiosResponse = await api.get(`pokemon/${i}/`);
        data.push(response.data);
      } catch (error) {
        console.error(`Erro ao buscar dados para o Pokémon ${i}: ${error}`);
      }
    }
    setPokedex(data);
  };


  return <PokedexContext.Provider value={{ pokedex, setPokedex, fetchData }}>{children}</PokedexContext.Provider>;
};

export const usePokedexContext = (): PokedexContextProps => useContext(PokedexContext);
