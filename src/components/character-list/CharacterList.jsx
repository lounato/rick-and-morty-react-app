import CharacterCard from "../character-card/CharacterCard";
import "./CharacterList.scss";

const CharacterList = ({ characters, onCharacterClick }) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onCharacterClick={() => onCharacterClick(character)}
        />
      ))}
    </div>
  );
};

export default CharacterList;
