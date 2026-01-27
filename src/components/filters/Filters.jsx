import { useFilters } from "../../hooks/useFilters";
import SearchBar from "../searchbar/SearchBar";
import "./Filters.scss";

const Filters = ({ setCurrentPage }) => {
  const {
    nameFilter,
    speciesFilter,
    statusFilter,
    filterType,
    setFilterType,
    setNameFilter,
    setSpeciesFilter,
    setStatusFilter,
  } = useFilters();

  const filterValues = {
    name: nameFilter,
    species: speciesFilter,
    status: statusFilter,
  };
  const setFilterValue = {
    name: setNameFilter,
    species: setSpeciesFilter,
    status: setStatusFilter,
  };

  const handleSearch = (term) => {
    setFilterValue[filterType](term);
    setCurrentPage(1); // reiniciar paginación al cambiar filtro
  };

  return (
    <div className="filters">
      <div className="filters__type">
        {["name", "species", "status"].map((type) => (
          <button
            key={type}
            className={filterType === type ? "active" : ""}
            onClick={() => setFilterType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="filters__searchbar">
        <SearchBar
          searchTerm={filterValues[filterType] || ""}
          setSearchTerm={handleSearch}
          placeholder={`Search by ${filterType}`}
        />
      </div>
    </div>
  );
};

export default Filters;
