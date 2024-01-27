import { Link } from "react-router-dom";
import logo from "../../assets/MyPokedex.png";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link to="/" className={styles.headerContent}>
          <img src={logo} alt="" />
        </Link>
        <div className={styles.navHeader}>
          <Link className={styles.linkNav} to={"/Pokedex/1"}>
            PokeDex
          </Link>
          <Link className={styles.linkNav} to={"/Favorite"}>
            Favoritos
          </Link>
        </div>
      </div>
    </header>
  );
};
