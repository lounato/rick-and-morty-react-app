import { createContext, useState } from "react";

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [filterType, setFilterType] = useState("name");

  const resetFilters = () => {
    setNameFilter("");
    setSpeciesFilter("");
    setStatusFilter("");
    setFilterType("name");
  };

  return (
    <FiltersContext.Provider
      value={{
        nameFilter,
        setNameFilter,
        speciesFilter,
        setSpeciesFilter,
        statusFilter,
        setStatusFilter,
        filterType,
        setFilterType,
        resetFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
