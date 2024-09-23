import pokemonLogo from "./img/pokemon-logo-pokemon-icon-transparent-free-png.webp";

const HomePage = () => {
  return (
    <main>
      <h1>Welcome to the world of</h1>
      <img src={pokemonLogo} alt="Pokemon Logo" />
      <p>
        Discover a world of creatures, battles and legendary adventures in
        Pokémon.
      </p>
    </main>
  );
};

export default HomePage;
