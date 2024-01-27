import React from "react";
import { Route, Routes } from "react-router-dom";
import { PokedexPage } from "../pages/PokedexPage";
import { Favorite } from "../pages/FavPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFound";

export const RoutesMain: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Pokedex/:id" element={<PokedexPage />} />
      <Route path="/Favorite" element={<Favorite />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
