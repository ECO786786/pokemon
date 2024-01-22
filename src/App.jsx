import { Routes, Route } from "react-router-dom";
import { HomePage, PokemonsPage, PokemonPage, NotFoundPage } from "./pages";
import { PageWrapper } from "./components";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<HomePage />} />
        <Route path="pokemons" element={<PokemonsPage />} />
        <Route path="pokemons/:id" element={<PokemonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
