export const searchPokemon = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const res = await fetch(url);
    const data = await res.json();
    
    return data;
  } catch (error) {}
};

export const getPokemons = async (limit = 10, offset = 0) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const res = await fetch(url);
        const data = await res.json();
      
        return data;
    } catch (error) {
        console.log(error)
    }
};

export const getPokemonData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
      console.log(error)
  }
};

export const getPokemonEvolutions = async (id)=> {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error)
  }
}
