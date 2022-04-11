import React, { useEffect, useState } from "react";
import { NavBar } from "./Components/NavBar";
import { Pokedex } from "./Components/Pokedex";
import SearchBar from "./Components/SearchBar";
import { FavoriteContext } from "./context/favoritesContext";
import {
  getPokemons,
  getPokemonData,
  searchPokemon,
} from "./helpers/api";

export const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selected, setSelected] = useState({
    name: "",
    weight: "",
    sprite: "",
    types: [],
  });
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);

  const localStorageKey = 'favorite_pokemons'



  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);

      const promises = data.results.map(
        async (pokemon) => await getPokemonData(pokemon.url)
      );

      const results = await Promise.all(promises);

      setTotal(parseInt(data.count / 25));

      setLoading(false);
      setNotFound(false);
      setPokemons(results);
    } catch (error) {
      console.log(error);
    }
  };

  const storageFavPokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons);
  }

  useEffect(() => {
    storageFavPokemons()
  }, []);

  useEffect(() => {
    if(!searching) {
      fetchPokemons();
    }
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];

    const isFavorite = updated.indexOf(name);

    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);

    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  const onSearch = async (pokemon)=> {
    if(!pokemon) {
      return fetchPokemons();
    }
    setSearching(true);
    setLoading(true);
    const result = await searchPokemon(pokemon);
    if(!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setNotFound(false);
      setPage(0);
      setTotal(1);
      setPokemons([result]);
    }
    setSearching(false);
    setLoading(false);
  }

  const showSelectedPokemon = (pokemon) => {
    setSelected({
      name: pokemon.name,
      id: pokemon.id,
      weight: pokemon.weight,
      sprite: pokemon.sprites.front_default,
      types: pokemon.types,
      height: pokemon.height,
      hp: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      special_attack: pokemon.stats[3].base_stat,
      special_deffense: pokemon.stats[4].base_stat,
      speed: pokemon.stats[5].base_stat,
    });
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
        selectedPokemons: selected,
        showSelectedPokemon: showSelectedPokemon,
      }}
    >
      <NavBar />
      <div className="App">
        <SearchBar onSearch={onSearch} />
        {notFound ? <div className="not-found">Pokemon not Found...</div> :
        <Pokedex
          pokemons={pokemons}
          page={page}
          total={total}
          setPage={setPage}
          loading={loading}
        />
        }
      </div>
    </FavoriteContext.Provider>
  );
};
