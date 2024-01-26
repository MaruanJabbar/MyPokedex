import React from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import Pokedex from "../../components/Pokedex";

export const PokedexPage: React.FC = () => {
  return (
    <DefaultTemplate>
      <Pokedex/>
    </DefaultTemplate>
  );
};
