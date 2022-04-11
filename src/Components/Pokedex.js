import React, { useContext, useState } from 'react';
import { FavoriteContext } from '../context/favoritesContext';
import { Pagination } from './Pagination';
import { Pokemon } from './Pokemon';
import StatsSection from './StatsSection';

export const Pokedex = ({pokemons, page, total, setPage, loading}) => {

    const {favoritePokemons, updateFavoritePokemons, selectedPokemons, showSelectedPokemon} = useContext(FavoriteContext);
    


    const previousPage = ()=> {
        if(page < 1) {
            return
        } else {
            setPage(page - 1)
        }
    }
    
    const nextPage = ()=> {
        setPage(page + 1)
    }

    const [cardState, setCardState] = useState(false);



    return (
        <div>
            <div className='header'>
                <h1>Pokedex</h1>
                <div className='pagination-container'>
                    <Pagination pokemons={pokemons} page={page + 1} totalPages={total} previousPage={previousPage} nextPage={nextPage} />
                </div>
            </div>

            {loading ? <div className="loader-container">
                            <div className="loader">Loading...</div>
                        </div>
                    : <div className='pokedex-grid'>
                        {pokemons.map(pokemon => {
                            return(<Pokemon cardState={cardState} setCardState={setCardState} pokemons={pokemon} key={pokemon.name}/>)
                        })}
                      </div>
            }
            {<StatsSection selectedPokemons={selectedPokemons} setCardState={setCardState} cardState={cardState} />} 



        </div>
    );
}