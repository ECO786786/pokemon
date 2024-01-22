import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardFilter from "../CardFilter";
const ShowAllPokemons = () => {
  const [pokemons, SetPokemons] = useState([]);
  const [textFilter, setTextFilter] = useState("");
  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        if (response.status === 200) {
          SetPokemons(data.results);
        } else {
          console.log(response.status);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    loadPokemon();
  }, []);

  function displayPokemon() {
    return pokemons
      .filter(
        (pokemon) =>
          textFilter.length === 0 ||
          pokemon.name.toLowerCase().includes(textFilter.toLowerCase())
      )
      .map((pokemon, index) => (
        <p key={pokemon.name || index}>
          <Link to={`/pokemons/${index + 1}`}>
            {pokemon.name.toUpperCase()}
          </Link>
        </p>
      ));
  }

  return (
    <section className="container">
      <h1>Pokémon List</h1>
      <CardFilter textFilter={textFilter} setTextFilter={setTextFilter} />
      <div className="card-container">{displayPokemon()}</div>
    </section>
  );
};

export default ShowAllPokemons;
