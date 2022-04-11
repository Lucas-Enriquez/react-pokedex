import { createContext } from 'react'

export const FavoriteContext = createContext({
    favoritePokemons: [],
    updateFavoritePokemons : (id) => null,

    selectedPokemons: null,
    showSelectedPokemon : (id) => null
})