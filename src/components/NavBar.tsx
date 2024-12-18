interface Pokemon {
	pokedex_id: number;
	sprites: string[];
	name: {
		fr: string
	};
	
}
interface NavBarProps {
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
	return (
		<nav>
			{pokemonList.map((pokemon, index) => (
				<li key={pokemon.pokedex_id}>
					<button
						type="button"
						onClick={() => {
							if (pokemon.name.fr === "pikachu") {
								alert(" pika");
							}
							setPokemonIndex(index);
						}}
					>
						{pokemon.name.fr}
					</button>
				</li>
			))}
		</nav>
	);
}
export default NavBar;
