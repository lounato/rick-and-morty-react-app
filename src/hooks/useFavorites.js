import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoriteContext";

export const useFavorites = () => useContext(FavoritesContext);
