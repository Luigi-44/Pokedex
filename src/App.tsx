import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			name: "mew",
			imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
		},
		{
			name: "Pokemon inconnu au bataillon",
			
		},
	];
	return (
		<div>
			<PokemonCard pokemon={pokemonList[2]} />
		</div>
	);
}

export default App;
