import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home-page/HomePage";
import FavoritesPage from "./pages/favorites-page/FavoritesPage";
import { FavoritesProvider } from "./contexts/FavoriteContext";
import Navbar from "./components/navbar/Navbar";
import { FiltersProvider } from "./contexts/FiltersContext";

const App = () => {
  return (
    <FavoritesProvider>
      <FiltersProvider>
        <BrowserRouter>
          <div className="app">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </BrowserRouter>
      </FiltersProvider>
    </FavoritesProvider>
  );
};

export default App;
