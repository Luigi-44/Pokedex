import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useState } from "react";

function App() {
	const [pokemonIndex, setPokemonIndex]=useState(0);
	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			name: "mew",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
		},
		{
			name: "Pokemon inconnu au bataillon",
		},
	];

	const BoutPreced = () => {
        if (pokemonIndex > 0) {
            setPokemonIndex(pokemonIndex - 1);
        }
    };

	const BoutSuiv = () => {
        if (pokemonIndex < pokemonList.length - 1) {
            setPokemonIndex(pokemonIndex + 1);
        }
    };
	return (
		<section>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			<div>
			<button type="button" onClick={BoutPreced}>Précédent</button>
			<button type="button" onClick={BoutSuiv}>Suivant</button>
			</div>
		</section>
	);
}

export default App;
