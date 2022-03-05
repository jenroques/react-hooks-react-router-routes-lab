import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <Navlink to="/movies">Movies</Navlink>
      <Navlink to="/directors">Directors</Navlink>
      <Navlink to="/actors">Actors</Navlink>
    </div>
  );
}

export default NavBar;
