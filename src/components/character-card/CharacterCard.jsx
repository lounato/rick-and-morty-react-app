import "./CharacterCard.scss";

const CharacterCard = ({ character, onCharacterClick }) => {
  return (
    <div className="character-card" onClick={onCharacterClick}>
      <img
        src={character.image}
        alt={`${character.name}'s avatar`}
        className="character-card__avatar"
      />

      <div className="character-card__info">
        <h3 className="character-card__name">{character.name}</h3>
        <p className="character-card__planet">{character.origin.name}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
