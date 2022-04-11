import React, { useContext } from "react";
import { FavoriteContext } from "../context/favoritesContext";

export const NavBar = () => {
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    const {favoritePokemons} = useContext(FavoriteContext)

  return (
    <nav>
      <div>

      </div>
      <div>
        <img className="title" src={imgUrl} alt="PokeApi Logo"></img>
      </div>
      <div>
          <span className="heart">♥</span> <span>{favoritePokemons.length}</span>
      </div>
    </nav>
  );
};
