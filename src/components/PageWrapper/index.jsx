import { NavLink, Outlet } from "react-router-dom";
const styles = ({ isActive }) => ({ color: isActive ? "#a8dadc" : "#edf2f4" });

const PageWrapper = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" style={styles}>
            Home
          </NavLink>
          <NavLink to="/pokemons" style={styles}>
            All Pokémons
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
export default PageWrapper;
