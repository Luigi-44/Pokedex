import PokemonCard from "./components/PokemonCard";
import "./App.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { useEffect } from "react";


function App() {
	const [pokemonIndex, setPokemonIndex]= useState(1)
const [pokemonList, setPokemonList] = useState([])
	
	useEffect(() => {fetch("https://tyradex.vercel.app/api/v1/gen/1")
		.then( res=>res.json())
		.then( res=>setPokemonList(res));
	}, []);

	if(!pokemonList){return <div>loading...</div>}
	return (
		
		<section>
			
			
			<NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
		</section>
	);
}

export default App;
