import { HeaderStyle } from "../Header/headerStyle";
import styled from "styled-components";

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
      <h1 style={{ fontSize: 50 }}>Pleasure</h1>
      <div className="cardBlock"></div>
    </>
  );
};

export default PleasurePage;
