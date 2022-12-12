import { NavLink } from "react-router-dom";

import s from "./NavBar.module.scss";

let activeClass = {
  color: "black",
  backgroundColor: "rgb(197, 118, 118)",
  boxShadow: "2px 2px 10px rgb(0, 0, 0, .2)",
  textDecoration: "none",
};
const NavBar = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        style={({ isActive }) => (isActive ? activeClass : undefined)}
        to=""
      >
        Profile
      </NavLink>

      <NavLink
        style={({ isActive }) => (isActive ? activeClass : undefined)}
        to="dialogs"
      >
        Dialogs
      </NavLink>

      <NavLink
        style={({ isActive }) => (isActive ? activeClass : undefined)}
        to="/error"
      >
        error
      </NavLink>
    </nav>
  );
};

export default NavBar;
