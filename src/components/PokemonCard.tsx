import "./PokemonCard.css";

const PokemonCard: React.FC = () => {
	// Carte global du Pokemon
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
	];

	// Choix du Pokemon
	const pokemon = pokemonList[0];

	return (
		<figure>
			<img src={pokemon.imgSrc} alt={pokemon.name} />
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
};

export default PokemonCard;
