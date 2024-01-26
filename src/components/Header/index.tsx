import { Link } from "react-router-dom";
import logo from "../../assets/MyPokedex.png";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <img src={logo} alt="" />
        </div>
        <Link to={"/Pokedex/1"}>PokeDex</Link>
        <Link to={"/Favorite"}>Favoritos</Link>
      </div>
    </header>
  );
};
