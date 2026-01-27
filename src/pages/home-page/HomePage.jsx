import { useState } from "react";
import "./HomePage.scss";
import useFetch from "../../hooks/useFetch";
import CharacterList from "../../components/character-list/CharacterList";
import ReactPaginate from "react-paginate";
import CharacterModal from "../../components/character-modal/CharacterModal";
import SearchBar from "../../components/searchbar/SearchBar";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const apiUrl = searchTerm
    ? `https://rickandmortyapi.com/api/character/?name=${searchTerm}&page=${currentPage}`
    : `https://rickandmortyapi.com/api/character?page=${currentPage}`;

  const { data, error } = useFetch(apiUrl);

  const characters = data?.results || [];

  const pagesCount = data?.info?.pages;

  const handlePageClick = (selectedItem) => {
    const nextPage = selectedItem.selected + 1;
    setCurrentPage(nextPage);
  };

  const openModal = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="homepage">
      <div className="content">
        <div className="home__title">
          <h1>Rick and Morty characters</h1>
        </div>
        <div className="home__searchbar">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={(term) => {
              setSearchTerm(term);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="home__character_list">
          {characters.length > 0 && !error ? (
            <CharacterList
              characters={characters}
              onCharacterClick={openModal}
            />
          ) : (
            <p>Nobody is here...</p>
          )}
        </div>
        {pagesCount > 0 && (
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

export default HomePage;
