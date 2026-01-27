import "./SearchBar.scss";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  placeholder = "Search...",
}) => {
  const handleChange = (e) => setSearchTerm(e.target.value);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="searchbar__input"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className="searchbar__button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
