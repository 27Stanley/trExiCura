import React from "react";
import { useState } from "react";

import { searchHarForArt } from "../utils/axiosHAR";
import { searchMetForArt } from "../utils/axiosMET";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <div className="flex-col items-center justify-center">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700"
      >
        Find art by criteria
      </label>

      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search Criteria..."
        className="px-4 py-2 text- border border-gray-300 rounded mr-2 w-72"
      />

      <button
        onClick={handleSearch}
        className="px-4 py-2 text-base text-white bg-secondary rounded hover:bg-accent hover:text-tertiary focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
