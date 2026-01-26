import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home-page/HomePage";
import FavoritesPage from "./pages/favorites-page/FavoritesPage";
import { FavoritesProvider } from "./contexts/FavoriteContext";

const App = () => {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
};

export default App;
