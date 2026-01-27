import { useState } from "react";
import "./HomePage.scss";
import useFetch from "../../hooks/useFetch";
import CharacterList from "../../components/character-list/CharacterList";
import ReactPaginate from "react-paginate";
import CharacterModal from "../../components/character-modal/CharacterModal";
import { useFilters } from "../../hooks/useFilters";
import Filters from "../../components/filters/Filters";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { nameFilter, speciesFilter, statusFilter, filterType } = useFilters();
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const buildApiUrl = () => {
    const params = new URLSearchParams({ page: currentPage });
    if (filterType === "name" && nameFilter) params.set("name", nameFilter);
    if (filterType === "species" && speciesFilter)
      params.set("species", speciesFilter);
    if (filterType === "status" && statusFilter)
      params.set("status", statusFilter);
    return `https://rickandmortyapi.com/api/character/?${params.toString()}`;
  };

  const { data, error } = useFetch(buildApiUrl());

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
        <Filters setCurrentPage={setCurrentPage} />
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
