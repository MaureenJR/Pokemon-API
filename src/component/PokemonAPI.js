
import axios from "axios";
import { useEffect, useState } from "react";

const PokemonAPI = () => {
    const [pokemonName, setPokemonName] = useState([]);
    const [clicks, setClicks] = useState (0);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => response.data)
            .then(responseJson => {
                setPokemonName(responseJson.results);
            })

    }, [clicks])

    const madeClick = () =>{
        setClicks(clicks+1);
    }

    return(
        <div>
            <button className="addPokemons" onClick={madeClick}> Fetch Pokemon </button>
            {clicks ==! 0 && pokemonName.map((currentPokemon, index) => {
                return(
                    <ul key={index}>
                        <li>{currentPokemon.name}</li>
                    </ul>
                );
            })}
        </div>
    );
}

export default PokemonAPI;