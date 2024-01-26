import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { Favorite } from "../pages/FavPage";

export const RoutesMain: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Favorite" element={<Favorite />} />
    </Routes>
  );
};
