import { Link } from "react-router-dom";
import styles from "./style.module.scss";

interface PokemonListProps {
  id: number;
}

export const NavBarPokedex: React.FC<PokemonListProps> = ({ id }) => {
  const maxNumber = 35;

  const generateSequence = (n: number): number[] => {
    const sequence = [];

    for (let i = Math.max(1, n - 4); i <= Math.min(maxNumber, n + 4); i++) {
      if (i > 0 && i !== 1 && i !== 35) {
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
            <Link className={styles.pokedexNavBarBtn} to={`/pokedex/1`}>
              Primeira
            </Link>
          </li>
        ) : (
          <li>
            <span className={styles.pokedexNavBarSpan}>Primeira</span>
          </li>
        )}
        {id > 5 && (
          <li>
            <span className={styles.pokedexNavBarSpan}>...</span>
          </li>
        )}

        {lista.map((num) =>
          num !== 1 && num !== id ? (
            <li key={num}>
              <Link className={styles.pokedexNavBarBtn} to={`/pokedex/${num}`}>
                {num}
              </Link>
            </li>
          ) : (
            <li key={num}>
              <span className={styles.pokedexNavBarSpan}>{num}</span>
            </li>
          )
        )}
        {id < 30 && (
          <li>
            <span className={styles.pokedexNavBarSpan}>...</span>
          </li>
        )}

        {id !== 35 ? (
          <li>
            <Link className={styles.pokedexNavBarBtn} to={`/pokedex/${maxNumber}`}>
              Ultima
            </Link>
          </li>
        ) : (
          <li>
            <span className={styles.pokedexNavBarSpan}>Ultima</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBarPokedex;
