import React from "react";
import styles from "./style.module.scss";
import { PokemonCard } from "./PokemonCard";
import { useFavoriteContext } from "../../providers/FavListContext";

interface PokemonListProps {}

export const FavoriteList: React.FC<PokemonListProps> = () => {
  const { favoriteList } = useFavoriteContext();

  if (favoriteList.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <ul className={styles.pokedexList}>
        {favoriteList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
