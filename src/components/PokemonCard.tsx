import "./PokemonCard.css";

const PokemonCard: React.FC = () => {
	// Carte global du Pokemon
	const pokemonList = [
		{
			name: "inconnu",
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
			{pokemon.imgSrc != null ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>???</p>
			)}
			<img src={pokemon.imgSrc} alt={pokemon.name} />
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
};

export default PokemonCard;
