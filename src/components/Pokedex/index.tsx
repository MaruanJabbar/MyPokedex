import { usePokedexContext } from "../../providers/PokedexContext";
import PokemonList from "../PokemonList";
import { useParams } from "react-router-dom";

interface PokemonListProps {}

export const Pokedex: React.FC<PokemonListProps> = () => {
  const { pokedex } = usePokedexContext();
  const { id } = useParams();

  const parsedId = id ? parseInt(id, 10) : 1;

  const showPokedex = pokedex.slice(parsedId * 30 - 30, parsedId * 30);

  if (showPokedex.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <PokemonList pokeList={showPokedex} />
      <div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Pokedex;
