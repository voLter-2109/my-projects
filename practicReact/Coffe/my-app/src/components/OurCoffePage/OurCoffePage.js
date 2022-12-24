import { HeaderStyle } from "../Header/headerStyle";
import styled from "styled-components";

const HeaderOurCoffe = styled(HeaderStyle)`
  background-image: url("./img/header/ourCoffe.png");
  height: 30vh;
`;

const OurCoffePage = (props) => {
  
  return (
    <>
      <HeaderOurCoffe>
        <h1>Our Coffee</h1>
      </HeaderOurCoffe>
      <input name="filterInput" type="text" placeholder="Поиск" />
      <div className="cardBlock">{props.cardCoffee}</div>
    </>
  );
};

export default OurCoffePage;
