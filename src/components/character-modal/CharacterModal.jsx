import FavoriteButton from "../favorite-button/FavouriteButton";
import "./CharacterModal.scss";

const CharacterModal = ({ isOpen, onClose, character }) => {
  return (
    !!isOpen &&
    !!character && (
      <div className="character-modal__overlay" onClick={onClose}>
        <div className="character-modal__content">
          <button className="character-modal__close" onClick={onClose}>
            &times;
          </button>

          <h2>{character.name}</h2>

          <div className="character-modal__image-wrapper">
            <img
              src={character.image}
              alt={character.name}
              className="character-modal__image"
            />
          </div>

          <div className="character-modal__info">
            <div className="character-modal__details">
              <p>
                <strong>Status:</strong> {character.status || "?"}
              </p>
              <p>
                <strong>Species:</strong> {character.species || "?"}
              </p>
              <p>
                <strong>Type:</strong> {character.type || "?"}
              </p>
              <p>
                <strong>Gender:</strong> {character.gender || "?"}
              </p>
              <p>
                <strong>Location:</strong> {character.location.name || "?"}
              </p>
            </div>

            <FavoriteButton character={character} />
          </div>
        </div>
      </div>
    )
  );
};

export default CharacterModal;
