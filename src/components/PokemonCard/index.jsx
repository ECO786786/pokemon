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

  return (
    <div key={pokemon.id}>
      <h1>{pokemon.name}</h1>
      <p>{pokemon.height}</p>
    </div>
  );
};

export default PokemonCard;
