import { useEffect } from "react";
import { usePokedexContext } from "../../providers/PokedexContext";
import PokemonList from "../PokemonList";
import { useNavigate, useParams } from "react-router-dom";
import NavBarPokedex from "./NavBarPokedex";

interface PokemonListProps {}

export const Pokedex: React.FC<PokemonListProps> = () => {
  const { pokedex } = usePokedexContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const parsedId = id ? parseInt(id, 10) : 1;

  useEffect(() => {
    if (parsedId > 34) {
      navigate("/pokedex/34");
    }
    if (parsedId < 1) {
      navigate("/pokedex/1");
    }
  }, []);
  const showPokedex = pokedex.slice(parsedId * 30 - 30, parsedId * 30);

  if (showPokedex.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <PokemonList pokeList={showPokedex} />
      <NavBarPokedex id={parsedId}></NavBarPokedex>
    </div>
  );
};

export default Pokedex;
