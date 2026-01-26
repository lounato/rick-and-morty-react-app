import { useState } from "react";
import "./HomePage.scss";
import useFetch from "../../hooks/useFetch";
import CharacterList from "../../components/character-list/CharacterList";
import ReactPaginate from "react-paginate";
import CharacterModal from "../../components/character-modal/CharacterModal";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const { data, loading, error } = useFetch(
    `https://rickandmortyapi.com/api/character?page=${currentPage}`,
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const characters = data?.results || [];

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
        <div className="home__character_list">
          <CharacterList characters={characters} onCharacterClick={openModal} />
        </div>
        {data?.info?.pages > 0 && (
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={Math.ceil(data?.info?.pages || 0)}
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
