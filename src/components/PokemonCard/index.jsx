import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        if (response.status === 200) {
          setPokemon(data);
        } else {
          console.log(response.status);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    loadPokemon();
  }, [id]);

  console.log(pokemon);

  // Conditional rendering to check if the sprites object and properties exist
  return (
    <div className="box" key={pokemon.id}>
      <h1>{pokemon.name && pokemon.name.toUpperCase()}</h1>
      {pokemon.sprites && pokemon.sprites.front_default && (
        <img
          className="pokemon-img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      )}
      {pokemon.types && pokemon.types.length > 0 && (
        <p>Type: {pokemon.types[0].type.name}</p>
      )}
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
};

export default PokemonCard;
