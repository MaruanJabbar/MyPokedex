import React from "react";
import { usePokedexContext } from "../../providers/PokedexContext";
import styles from "./style.module.scss";
import { PokemonCard } from "./PokemonCard";

interface PokemonListProps {}

export const PokemonList: React.FC<PokemonListProps> = () => {
  const { pokedex } = usePokedexContext();

  if (pokedex.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <ul className={styles.pokedexList}>
        {pokedex.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
