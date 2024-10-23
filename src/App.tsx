import "./App.css";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";


  function App() {

   const pokemonList = [
    { name: "bulbasaur", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
    { name: "mew" },
   ];

   const {name, imgSrc} = pokemonList[0]
    
    return (
  
      <section>
        <MyTitle/>
        <PokemonCard  name="bulbasaur"  imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/>
        <PokemonCard  name="mew"  imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"/>
        <PokemonCard  name="mewtwo"  imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"/>
        <PokemonCard  name="salameche"  imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"/>
        <PokemonCard  name="??"  imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png"/>
        <PokemonCard  name="mew"  imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png"/>
        <PokemonCard  name="mew"  imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png"/>
        <PokemonCard  name={name} imgSrc={imgSrc} />
        </section>
  
    );
  
  }

export default App;