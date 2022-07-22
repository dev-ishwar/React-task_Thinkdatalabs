import React from "react";
import "./Search.css";

const Search = ({ onSearch }) => {
  return (
    <div className="search-box">
      <input
        type="search"
        placeholder="search..."
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
