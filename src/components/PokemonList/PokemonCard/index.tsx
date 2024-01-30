import styles from "./style.module.scss";
import React from "react";
import closedPokeball from "../../../assets/pokeballClosed.svg";
import openPokeball from "../../../assets/pokeballOpen.svg";
import { useFavoriteContext } from "../../../providers/FavListContext";
import { Pokemon } from "../../../providers/PokedexContext";
import { Link } from "react-router-dom";

interface PokemonProps {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => {
  const { favoriteList, addFavorite, removeFavorite } = useFavoriteContext();

  const isFav = (pokemon: Pokemon): boolean => {
    return favoriteList.some((favPokemon) => favPokemon === pokemon.id);
  };

  const id: string = `${pokemon.id}`.padStart(3, "0");
  const linkImagem: string = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;

  const handleFavContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (isFav(pokemon)) {
      removeFavorite(pokemon);
    } else {
      addFavorite(pokemon);
    }
  };

  return (
    <Link className={styles.pokedexCard} to={`/Pokemon/${pokemon.id}`} onClick={(e) => e.stopPropagation()}>
      <div className={styles.cardWrapper}>
        <div className={styles.favContainer} onClick={handleFavContainerClick}>
          {isFav(pokemon) ? (
            <img className={styles.openPokeball} src={openPokeball} alt={`Fav icon`} />
          ) : (
            <img className={styles.closedPokeball} src={closedPokeball} alt={`Fav icon`} />
          )}
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.pokemonImage} src={linkImagem} alt={`Imagem do ${pokemon.name}`} />
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
      </div>
    </Link>
  );
};

export default PokemonCard;
