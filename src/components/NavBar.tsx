interface Pokemon {
	id: number;
	name: string;
	imgSrc?: string;
}
interface NavBarProps {
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
	return (
		<nav>
			{pokemonList.map((pokemon, index) => (
				<li key={pokemon.id}>
					<button
						type="button"
						onClick={() => {
							if (pokemon.name === "pikachu") {
								alert(" pika");
							}
							setPokemonIndex(index);
						}}
					>
						{pokemon.name}
					</button>
				</li>
			))}
		</nav>
	);
}
export default NavBar;
