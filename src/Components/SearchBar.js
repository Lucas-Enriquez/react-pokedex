import React, { useState } from "react";
import {searchPokemon} from "../helpers/api";

const SearchBar = ({onSearch}) => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const handleChange = (e) => {
    const string = e.target.value.toLowerCase();
    setSearch(string)

    if(e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = (e) => {
    onSearch(search)
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input onChange={handleChange} placeholder="Search a Pokemon"></input>
      </div>
      <div className="searchbar-button">
        <button onClick={onClick}>Search</button>
      </div>
      <div></div>
    </div>
  );
};

export default SearchBar;
