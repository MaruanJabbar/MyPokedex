import styles from "./style.module.scss";
import React from "react";
import closedPokeball from "../../../assets/pokeballClosed.svg";
import openPokeball from "../../../assets/pokeballOpen.svg";
import { useFavoriteContext } from "../../../providers/FavListContext";
import { Pokemon } from "../../../providers/PokedexContext";
interface PokemonProps {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => {
  const { favoriteList, addFavorite, removeFavorite } = useFavoriteContext();

  const isFav = (pokemon: Pokemon): boolean => {
    return favoriteList.some((favPokemon) => favPokemon === pokemon.id);
  };

  return (
    <li className={styles.pokedexCard} onClick={() => console.log("ta")}>
      {isFav(pokemon) ? (
        <div
          className={styles.favContainer}
          onClick={(e) => {
            e.stopPropagation();
            removeFavorite(pokemon);
          }}
        >
          <img className={styles.openPokeball} src={openPokeball} alt={`Fav icon`} />
        </div>
      ) : (
        <div
          className={styles.favContainer}
          onClick={(e) => {
            e.stopPropagation();
            addFavorite(pokemon);
          }}
        >
          <img className={styles.closedPokeball} src={closedPokeball} alt={`Fav icon`} />
        </div>
      )}
      <div className={styles.imgContainer}>
        <img className={styles.pokemonImage} src={pokemon.sprites.front_default as string} alt={`Imagem do ${pokemon.name}`} />
      </div>
      <p>Nº {pokemon.id.toString().padStart(4, "0")}</p>
      <p>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>
      <ul className={styles.typesList}>
        {pokemon.types.map((ty) => (
          <li key={crypto.randomUUID()} className={`typeContainer ${ty}`}>
            {ty[0].toUpperCase() + ty.slice(1)}
          </li>
        ))}
      </ul>
    </li>
  );
};
