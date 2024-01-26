import React from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import FavoriteList from "../../components/FavoriteList";

export const Favorite: React.FC = () => {
  return (
    <DefaultTemplate>
      <FavoriteList />
    </DefaultTemplate>
  );
};
