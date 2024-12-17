import PokemonCard from "./components/PokemonCard";
import "./App.css";
import NavBar from "./components/NavBar";
import { useState } from "react";

const pokemonList = [
	{
		id : 0,
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		id : 1,
		name: "mew",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
	},
	{
		id : 2,
		name: "charmander",
		imgSrc:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		id : 3,
		name: "squirtle",
		imgSrc:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		id : 4,
		name: "pikachu",
		imgSrc:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		id : 5,
		name: "Pokemon inconnu au bataillon",
	},
];

function App() {
	const [pokemonIndex, setPokemonIndex]=useState(0);
	
	return (
		<section>
		<NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex}/>
	    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
		</section>
	);
}

export default App;
