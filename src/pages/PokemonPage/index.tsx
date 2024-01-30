import React from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import PokemonInfo from "../../components/PokemonInfo";

export const PokemonPage: React.FC = () => {
  return (
    <DefaultTemplate>
      <PokemonInfo></PokemonInfo>
    </DefaultTemplate>
  );
};
