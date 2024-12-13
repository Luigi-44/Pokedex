import "./PokemonCard.css";

interface PokemonCardType {
	pokemon: {
		name: string;
		imgSrc?: string;
	};
}

function PokemonCard({ pokemon }: PokemonCardType) {
	return (
		<figure>
			{pokemon.imgSrc != null ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>Pokemon non debloqué</p>
			)}
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
