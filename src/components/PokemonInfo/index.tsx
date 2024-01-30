import { usePokedexContext } from "../../providers/PokedexContext";
import { useParams } from "react-router-dom";

export const PokemonInfo: React.FC = () => {
  const { pokedex } = usePokedexContext();
  const { id } = useParams();

  const parsedId = id ? parseInt(id, 10) : 1;
  const pokemon = pokedex[parsedId];
  const imageId: string = `${pokemon.id-1}`.padStart(3, "0");

  const linkImagem: string = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageId}.png`;

  return (
    <div className="container">
      <h1>{pokedex[parsedId - 1].name}</h1>
      <div>
        <div><img src={linkImagem} alt="" /></div>
      </div>
    </div>
  );
};

export default PokemonInfo;
