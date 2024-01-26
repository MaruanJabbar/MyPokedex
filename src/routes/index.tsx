import React from "react";
import { Route, Routes } from "react-router-dom";
import { PokedexPage } from "../pages/PokedexPage";
import { Favorite } from "../pages/FavPage";

export const RoutesMain: React.FC = () => {
  return (
    <Routes>
      <Route path="/Pokedex/:id" element={<PokedexPage />} />
      <Route path="/Favorite" element={<Favorite />} />
    </Routes>
  );
};
