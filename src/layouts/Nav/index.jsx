import { NavLink, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav id="nav-links">
        <NavLink to="">Home</NavLink>
        <NavLink to="colors">Colors</NavLink>
        <NavLink to="colors/new">Add Color</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
