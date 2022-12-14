import { NavLink } from "react-router-dom";

import s from "./NavBar.module.scss";

let activeClass = {
  color: "black",
  backgroundColor: "rgb(197, 118, 118)",
  boxShadow: "2px 2px 10px rgb(0, 0, 0, .2)",
  textDecoration: "none",
};
const NavBar = (props) => {
  const Friends = () => {
    const friend = props.frineds.map((f) => {
      return (
        <>
          <div className={s.friend}>
            <img src={f.url} alt="" />
            <p>{f.name}</p>
          </div>
        </>
      );
    });
    return friend;
  };
   
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
      <h1>Friends</h1>
      <div>
        <Friends />
      </div>
    </nav>
  );
};

export default NavBar;
