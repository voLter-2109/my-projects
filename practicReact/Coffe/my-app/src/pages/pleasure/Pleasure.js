import { Component, Fragment } from "react";
import { HeaderStyle } from "../Header/headerStyle";
import styled from "styled-components";

const HeaderPleasure = styled(HeaderStyle)`
  background-image: url("./img/header/pleasure.png");
  height: 30vh;
`;

export default class Pleasure extends Component {
  render() {
    return (
      <Fragment>
        <HeaderPleasure>
          <h1>For your pleasure</h1>
        </HeaderPleasure>
        <h1 style={{ fontSize: 50 }}>Pleasure</h1>
      </Fragment>
    );
  }
}
