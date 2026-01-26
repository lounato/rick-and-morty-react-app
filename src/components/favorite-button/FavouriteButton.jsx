import emptyHeartImage from "../../assets/images/empty-heart.png";
import fullHeartImage from "../../assets/images/full-heart.png";
import { useFavorites } from "../../hooks/useFavorites";
import "./FavoriteButton.scss";

const FavoriteButton = ({ character }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleOnClick = (e) => {
    e.stopPropagation();
    toggleFavorite(character.id);
  };

  return (
    <div className="like-button" onClick={handleOnClick}>
      {isFavorite(character.id) ? (
        <img src={fullHeartImage} alt="Heart for favorite button" />
      ) : (
        <img src={emptyHeartImage} alt="Empty heart for favorite button" />
      )}
    </div>
  );
};

export default FavoriteButton;
