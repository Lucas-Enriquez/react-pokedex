import React, { useContext, useState } from 'react';
import { FavoriteContext } from '../context/favoritesContext';
import StatsSection from './StatsSection';
export const Pokemon = ({pokemons, cardState, setCardState}) => {


    const {favoritePokemons, updateFavoritePokemons, selectedPokemons, showSelectedPokemon} = useContext(FavoriteContext);
    
   const typeColors = {
        electric: '#FFEA70',
        normal: '#B09398',
        fire: '#FF675C',
        water: '#0596C7',
        ice: '#AFEAFD',
        rock: '#999799',
        flying: '#7AE7C7',
        grass: '#4A9681',
        psychic: '#FFC6D9',
        ghost: '#561D25',
        bug: '#A2FAA3',
        poison: '#795663',
        ground: '#D2B074',
        dragon: '#DA627D',
        steel: '#1D8A99',
        fighting: '#2F2F2F',
        default: '#2A1A1F',
        fairy: '#EE99AC',
    };

    const types = pokemons.types.map(type => type.type);

    let redHeart = false;

    if(favoritePokemons.includes(pokemons.name)) {
        redHeart = true;
    }


    const addRemovePokemon = (e) => {
        updateFavoritePokemons(pokemons.name);
    }


    const showStats = (e)=> {
        if(cardState === false) {
            setCardState(true);
            showSelectedPokemon(pokemons);
            return;
        } else {
            setCardState(false);
            return
        }
    }

    return (
        <>
        <div className='pokemon-card' onClick={showStats} >
            {/* <div className='pokemon-img' style={{"backgroundColor": `${types[0].name === "grass" ? typeColors.grass : typeColors.default}`}} > */}
            {/* <div className='pokemon-img' style={{"backgroundColor": `${typeColors.types[0].name}`}} > */}
            <div className='pokemon-img' style={{"backgroundColor": `${typeColors[types[0].name]}`}} >
                <img src={pokemons.sprites.front_default}  alt={pokemons.name}/>
            </div>

            <div className='card-body'>
                <div className='card-top'>
                    <h3>{pokemons.name}</h3>
                    <span># {pokemons.id}</span>
                </div>
                <div className='card-bottom'>
                    <div className='pokemon-type'>
                        {pokemons.types.map((type, idx) => <span className='types-text' style={{"border": `2px solid ${typeColors[types[0].name]}`}} key={idx}>{type.type.name}</span>)}
                    </div>
                    
                    <div onClick={addRemovePokemon} className={`${redHeart ? 'pokemon-favorite heart' : 'pokemon-not-favorite heart'}`}>♥</div>

                </div>
            </div>
        </div>
        </>
    );
}