import { Outlet, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./header.scss";

const MainNav = (props) => {
  const resetCoffeCard1 = () => {
    props.resetCoffeCard();
  };

  return (
    <>

      <Navbar  expand="lg" >
        <Container>
          <Navbar.Brand>
            <NavLink onClick={resetCoffeCard1} to="/">
              <img src="./img/logoIn.svg" alt="header home img" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink onClick={resetCoffeCard1} to="/">
                Coffee house
              </NavLink>
              <NavLink onClick={resetCoffeCard1} to="/ourcoffee">
                Our coffee
              </NavLink>
              <NavLink onClick={resetCoffeCard1} to="/foryourpleasure">
                For your pleasure
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default MainNav;
