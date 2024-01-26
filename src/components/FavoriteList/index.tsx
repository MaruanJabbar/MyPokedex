import React from "react";
import { useFavoriteContext } from "../../providers/FavListContext";
import PokemonList from "../PokemonList";
import { usePokedexContext } from "../../providers/PokedexContext";
import { Pokemon } from "../../providers/PokedexContext";
interface PokemonListProps {}

export const FavoriteList: React.FC<PokemonListProps> = () => {
  const { favoriteList } = useFavoriteContext();
  const { pokedex } = usePokedexContext();
  const favPokedex: Pokemon[] = favoriteList.map((i) => pokedex[i-1]);
  console.log(favPokedex);
  if (favoriteList.length === 0) {
    return <p>Não tem favorito .-.</p>;
  }

  return (
    <div className="container">
      <PokemonList pokeList={favPokedex} />
    </div>
  );
};

export default FavoriteList;
