import { Component, Fragment } from "react";
import { Outlet, NavLink } from "react-router-dom";

import { Nav } from "./headerStyle";

class MainNav extends Component {
  render() {
    return (
      <Fragment>
        <Nav>
          <img src="./img/logoIn.svg" alt="header home img" />
          <ul>
            <NavLink to="/">
              Coffee house
            </NavLink>
            <NavLink to="/ourcoffee">Our coffee</NavLink>
            <NavLink to="/foryourpleasure">For your pleasure</NavLink>
          </ul>
        </Nav>
        <Outlet />
      </Fragment>
    );
  }
}

export default MainNav;
