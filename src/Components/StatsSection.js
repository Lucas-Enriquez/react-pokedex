import React from 'react'

export default function StatsSection(props) {

    const {selectedPokemons, setCardState, cardState} = props;

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

    const darkTypeColors = {
        electric: '#ffd900',
        normal: '#825e64',
        fire: '#b80c00',
        water: '#04789f',
        ice: '#06b5ef',
        rock: '#6f6d6f',
        flying: '#25cb99',
        grass: '#40826f',
        psychic: '#ff75a3',
        ghost: '#2e0f13',
        bug: '#97cf29',
        poison: '#624650',
        ground: '#a97f37',
        dragon: '#b22a47',
        steel: '#197885',
        fighting: '#242424',
        default: '#2c1b21',
        fairy: '#e15170',
    };


    const types = selectedPokemons.types.map(type => type.type);

  return (
      <>
      {selectedPokemons.name === '' ? <div className='pokemon-stats-container close-stats'></div> :
        <div className={`pokemon-stats-container ${cardState === true ? "show-stats" : "close-stats"}`} style={{"backgroundColor": `${typeColors[types[0].name]}`}}>
            <div className='pokemon-stats-top' ><i onClick={() => setCardState(false)} className="close-icon fa-solid fa-xmark"></i><div className='stats-poke-name'><h3 key={selectedPokemons.name}>{selectedPokemons.name}</h3></div> </div>
            <div className='pokemon-stats-img-container' >
                <img alt={selectedPokemons.sprite} src={selectedPokemons.sprite}></img>
            </div>
            <div className='pokemon-stats'>
                {selectedPokemons.types.map(type => <h4 style={{"backgroundColor": `${darkTypeColors[types[0].name]}`}} key={type.type.name} >{type.type.name}</h4>)}

                <div className='stats-row-container'>
                    <div className='stats-row'><span>HP</span><span>{selectedPokemons.hp}</span></div>
                    <div className='stats-row'><span>Attack</span><span>{selectedPokemons.attack}</span></div>
                    <div className='stats-row'><span>Deffense</span><span>{selectedPokemons.defense}</span></div>
                    <div className='stats-row'><span>Special Attack</span><span>{selectedPokemons.special_attack}</span></div>
                    <div className='stats-row'><span>Special Deffense</span><span>{selectedPokemons.special_deffense}</span></div>
                    <div className='stats-row'><span>Speed</span><span>{selectedPokemons.speed}</span></div>
                </div>
            </div>
        </div>
        }
      </>
  )
}
