import { Link } from "react-router-dom";
import styles from "./style.module.scss";

interface PokemonListProps {
  id: number;
}

export const NavBarPokedex: React.FC<PokemonListProps> = ({ id }) => {
  const maxNumber = 34;

  const generateSequence = (n: number): number[] => {
    const sequence = [];

    for (let i = Math.max(1, n - 4); i <= Math.min(maxNumber, n + 4); i++) {
      if (i > 0) {
        sequence.push(i);
      }
    }

    return sequence;
  };

  const lista = generateSequence(id);

  return (
    <div>
      <ul className={styles.pokedexNavBar}>
        {id !== 1 ? (
          <li>
            <Link to={`/pokedex/1`}>Primeira</Link>
          </li>
        ) : (
          <li>
            <span>Primeira</span>
          </li>
        )}
        {id > 5 && (
          <li>
            <span>...</span>
          </li>
        ) }

        {lista.map((num) => (
          <li key={num}>
            <Link to={`/pokedex/${num}`}>{num !== 1 && num}</Link>
          </li>
        ))}
        {id < 30 && (
          <li>
            <span>...</span>
          </li>
        ) }

        {id !== 34 ? (
          <li>
            <Link to={`/pokedex/${maxNumber}`}>Ultima</Link>
          </li>
        ) : (
          <li>
            <span>Ultima</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBarPokedex;
