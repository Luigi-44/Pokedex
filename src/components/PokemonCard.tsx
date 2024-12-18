import "./PokemonCard.css";

interface PokemonCardType {
	pokemon: {
		
			pokedex_id: number;
			sprites: {
				regular : string;
			}
			name: {
				fr: string
			};
	};
}

function PokemonCard({ pokemon }: PokemonCardType) {
	console.log(pokemon);
	
	return (
		<figure>
			{pokemon.sprites.regular != null ? (
				<img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
			) : (
				<p>Pokemon non debloqué</p>
			)}
			<figcaption>{pokemon.name.fr}</figcaption>
		</figure>
	);
}

export default PokemonCard;
