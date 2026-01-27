import "./SearchBar.scss";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search character"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchbar__input"
      />
      <button className="searchbar__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
