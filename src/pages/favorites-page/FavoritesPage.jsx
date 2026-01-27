import ReactPaginate from "react-paginate";
import CharacterList from "../../components/character-list/CharacterList";
import { useFavorites } from "../../hooks/useFavorites";
import useFetch from "../../hooks/useFetch";
import "./FavoritesPage.scss";
import CharacterModal from "../../components/character-modal/CharacterModal";
import { useState } from "react";

const FavoritesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const { favorites } = useFavorites();

  const favoritesUrl =
    favorites.length > 0
      ? `https://rickandmortyapi.com/api/character/${favorites.join(",")}`
      : null;

  const { data, error } = useFetch(favoritesUrl);

  const favCharacters = data
    ? data.length > 0
      ? data // more than 1 character
      : [data] // only 1 character
    : [];

  const pagesCount = data?.info?.pages;

  const handlePageClick = (selectedItem) => {
    const nextPage = selectedItem.selected + 1;
    if (nextPage >= 1 && nextPage <= data.info.pages) {
      setCurrentPage(nextPage);
    }
  };

  const openModal = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="favoritespage">
      <div className="content">
        <div className="fav__title">
          <h1>My Rick and Morty favourite characters</h1>
        </div>
        <div className="fav__character_list">
          {favCharacters.length > 0 && !error ? (
            <CharacterList
              characters={favCharacters}
              onCharacterClick={openModal}
            />
          ) : (
            <p>No favorites yet :(</p>
          )}
        </div>
        {favCharacters.length > pagesCount && (
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pagesCount}
            forcePage={currentPage === 1 ? 0 : currentPage - 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"pagination__active"}
          />
        )}
        <CharacterModal
          isOpen={!!selectedCharacter}
          onClose={closeModal}
          character={selectedCharacter}
        />
      </div>
    </div>
  );
};

export default FavoritesPage;
