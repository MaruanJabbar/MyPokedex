import React, { useEffect } from "react";
import { usePokedexContext } from "../../providers/PokedexContext";
import PokemonList from "../PokemonList";
import { useParams } from "react-router-dom";

interface PokemonListProps {}

export const Pokedex: React.FC<PokemonListProps> = () => {
  const { pokedex, fetchData } = usePokedexContext();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchData(parseInt(id, 10) * 100 - 99, parseInt(id, 10) * 100);
    }
  }, []);

  if (pokedex.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <PokemonList pokeList={pokedex} />
      <div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Pokedex;
