import React from "react";
import { useFavoriteContext } from "../../providers/FavListContext";
import PokemonList from "../PokemonList";

interface PokemonListProps {}

export const FavoriteList: React.FC<PokemonListProps> = () => {
  const { favoriteList } = useFavoriteContext();
  console.log(favoriteList);
  if (favoriteList.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <PokemonList pokeList={favoriteList} />
    </div>
  );
};

export default FavoriteList;
