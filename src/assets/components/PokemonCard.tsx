interface pokemonProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

function PokemonCard({ pokemon }: pokemonProps) {
  console.log(pokemon);
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;