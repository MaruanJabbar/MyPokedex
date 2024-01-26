import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services";
import { AxiosResponse } from "axios";

interface PokedexContextProps {
  pokedex: any[];
  setPokedex: React.Dispatch<React.SetStateAction<any[]>>;
}

const defaultValues: PokedexContextProps = {
  pokedex: [],
  setPokedex: () => {},
};

export const PokedexContext = createContext<PokedexContextProps>(defaultValues);

interface PokedexProviderProps {
  children: ReactNode;
}

export const PokedexProvider: React.FC<PokedexProviderProps> = ({ children }) => {
  const [pokedex, setPokedex] = useState<any[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = [];
    for (let i = 1; i <= 50; i++) {
      try {
        const response: AxiosResponse = await api.get(`pokemon/${i}/`);
        data.push(response.data);
      } catch (error) {
        console.error(`Erro ao buscar dados para o Pokémon ${i}: ${error}`);
      }
    }
    setPokedex(data);
  };

  return <PokedexContext.Provider value={{ pokedex, setPokedex }}>{children}</PokedexContext.Provider>;
};

export const usePokedexContext = (): PokedexContextProps => useContext(PokedexContext);
