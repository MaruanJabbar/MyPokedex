import React from "react";
import styles from "./style.module.scss";
import { PokemonCard } from "./PokemonCard";
import { Pokemon } from "../../providers/PokedexContext";
interface PokemonListProps {
  pokeList: Pokemon[]; 
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokeList }) => {
  if (pokeList.length === 0) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="container">
      <div>
        <ul className={styles.pokedexList}>
          {pokeList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default PokemonList;
