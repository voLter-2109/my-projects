import { Outlet, NavLink } from "react-router-dom";

import { Nav } from "./headerStyle";

const MainNav = (props) => {
  const resetCoffeCard1 = () => {
    props.resetCoffeCard();
  };

  return (
    <>
      <Nav>
        <img src="./img/logoIn.svg" alt="header home img" />
        <ul>
          <NavLink onClick={resetCoffeCard1} to="/">
            Coffee house
          </NavLink>
          <NavLink onClick={resetCoffeCard1} to="/ourcoffee">
            Our coffee
          </NavLink>
          <NavLink onClick={resetCoffeCard1} to="/foryourpleasure">
            For your pleasure
          </NavLink>
        </ul>
      </Nav>
      <Outlet />
    </>
  );
};

export default MainNav;
