import { useEffect, useState } from "react";
import { usePokedexContext } from "../../providers/PokedexContext";
import { useParams } from "react-router-dom";
import { api } from "../../services";
import styles from "./style.module.scss";

export interface PokemonInfo {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
  };
  egg_groups: {
    name: string;
    url: string;
  }[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: {
    name: string;
    url: string;
  };
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    };
  }[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  generation: {
    name: string;
    url: string;
  };
  growth_rate: {
    name: string;
    url: string;
  };
  habitat: {
    name: string;
    url: string;
  };
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  order: number;
  pal_park_encounters: {
    area: {
      name: string;
      url: string;
    };
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: {
      name: string;
      url: string;
    };
  }[];
  shape: {
    name: string;
    url: string;
  };
  varieties: {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}

export const PokemonInfo: React.FC = () => {
  const { pokedex } = usePokedexContext();
  const { id } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();

  const parsedId = id ? parseInt(id, 10) : 1;

  useEffect(() => {
    const productCreate = async () => {
      try {
        const { data } = await api.get(`pokemon-species/${parsedId}`);

        setPokemonInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    productCreate();
  }, []);
  console.log(pokemonInfo);
  console.log(pokemonInfo);

  return (
    <div className="container">
      <button>{"<---"}</button>
      <div className={styles.title}>
        <h1>{pokedex[parsedId - 1].name}</h1>
        <span>Nº {parsedId.toString().padStart(4, "0")}</span>
      </div>
      <div className={styles.pokemonInfoCard}>
        <div>
          <img src={pokedex[parsedId - 1].image} alt="" />
        </div>
        {pokemonInfo ? (
          pokemonInfo.flavor_text_entries ? (
            <div className={styles.pokemonDescription}>
              <p>{pokemonInfo.flavor_text_entries[0].flavor_text}</p>
            </div>
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export default PokemonInfo;
