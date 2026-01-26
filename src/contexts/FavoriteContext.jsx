import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (characterId) => {
    setFavorites((prevState) =>
      prevState.includes(characterId)
        ? prevState.filter((id) => id !== characterId)
        : [...prevState, characterId],
    );
  };

  const isFavorite = (characterId) => favorites.includes(characterId);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
