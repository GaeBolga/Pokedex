import { useState } from "react";
import PokemonCard from "./PokemonCard";
import pokemon from "./tableau";

function NavBar() {
  const [currentPokemon, setCurrentPokemon] = useState(pokemon[0]);

  return (
    <>
      <PokemonCard {...currentPokemon} />

      {pokemon.map((props, i) => (
        <button
          type="button"
          key={i}
          onClick={() => setCurrentPokemon(pokemon[i])}
        >
          {props.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;
