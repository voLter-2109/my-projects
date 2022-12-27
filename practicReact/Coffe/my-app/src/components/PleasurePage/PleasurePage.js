import { HeaderStyle } from "../Header/headerStyle";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
const HeaderPleasure = styled(HeaderStyle)`
  background-image: url("./img/header/pleasure.png");
  height: 30vh;
`;

const PleasurePage = () => {

  return (
    <>
      <HeaderPleasure>
        <h1>For your pleasure</h1>
      </HeaderPleasure>

      <Container>
        <h1 style={{ fontSize: 50 }}>Pleasure</h1>
      </Container>
    </>
  );
};

export default PleasurePage;
