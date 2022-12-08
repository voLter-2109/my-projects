import { NavLink } from "react-router-dom";

import s from "./NavBar.module.scss";

let activeClass = { color: "black" };

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeClass : undefined)}
            to=""
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeClass : undefined)}
            to="dialogs"
          >
            Dialogs
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeClass : undefined)}
            to="/error"
          >
            error
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
