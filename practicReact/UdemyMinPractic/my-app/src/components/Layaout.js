import { Component, Fragment } from "react";

// import { Link, Outlet } from "react-router-dom";
// {/* <Header>
//   <Link to="/" className={this.isActive}>
//     {" "}
//     Home
//   </Link>
//   <Link to="/blog" className={this.isActive}>
//     Blog{" "}
//   </Link>
//   <Link to="/about" className={this.isActive}>
//     About
//   </Link>
// </Header>; */}

import { NavLink, Outlet } from "react-router-dom";
//  import Link для создания ссылок
// NavLink для создания ссылок (но вешает класс active на текущую активную ссылку)
//  если нужен свой касс className={({ isActive }) => (isActive ? "active-link" : "")}
// {/* <NavLink to="/" className={this.isActive}>
//   {" "}
//   Home
// </NavLink>
// <NavLink to="/blog" className={this.isActive}>
//   Blog{" "}
// </NavLink>
// <NavLink to="/about" className={this.isActive}>
//   About
// </NavLink> */}

import styled from "styled-components";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";

// кастомный Link
import CustomLink from "./CustomLink";

const Header = styled.header`
  height: 50px;
  width: 95%;
  display: block;
  margin: 0 auto;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;
  a {
    color: white;
    font-size: 1.5em;
    margin-right: 15px;
    text-decoration: none;
    &.active-link {
      color: red;
      text-decoration: line-through;
    }
    &:hover {
      color: red;
      text-decoration: line-through;
    }
  }
`;

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.isActive = ({ isActive }) => (isActive ? "active-link" : "");
  }

  render() {
    return (
      <Fragment>
        <Header>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/blog">Blog</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          */
        </Header>

        <Container className="main" fluid="md">
          {/* Outlet то куда помещаются вложенные Route */}
          <Outlet />
        </Container>

        <footer className="footer">2021</footer>
      </Fragment>
    );
  }
}
