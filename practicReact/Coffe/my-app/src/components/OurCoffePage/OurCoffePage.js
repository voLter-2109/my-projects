import { HeaderStyle } from "../Header/headerStyle";
import Container from "react-bootstrap/Container";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

import styled from "styled-components";
import Footer from "../Footer/Footer";

const HeaderOurCoffe = styled(HeaderStyle)`
  background-image: url("./img/header/ourCoffe.png");
  height: 30vh;
`;

const OurCoffePage = (props) => {
  const onChangeText = (e) => {
    props.onChangeText(e.target.value);
  };
  const onResetText = () => {
    props.onChangeText("");
  };

  const CoffeeCard = () => {
    if (props.cardCoffee.length === 0) {
      return (
        <>
          <p>Not Found</p>
        </>
      );
    } else {
      return props.cardCoffee;
    }
  };
  return (
    <>
      <HeaderOurCoffe>
        <h1>Our Coffee</h1>
      </HeaderOurCoffe>
      <Container>
        <fieldset>
          <input
            style={{ border: "1px solid red" }}
            type="text"
            value={props.state.filter}
            onChange={onChangeText}
          ></input>
          <button onClick={onResetText}>reset</button>
        </fieldset>

        <div className="cardBlock">
          <CoffeeCard />
        </div>
        <ShoppingCart
          state={props.state.basket}
          delBuyCoffee={props.delBuyCoffee}
        />
      </Container>
      <Footer />
    </>
  );
};

export default OurCoffePage;
