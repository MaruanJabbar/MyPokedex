import React from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { PokemonList } from "../../components/PokemonList";

export const HomePage: React.FC = () => {
  return (
    <DefaultTemplate>
      <PokemonList />
    </DefaultTemplate>
  );
};
