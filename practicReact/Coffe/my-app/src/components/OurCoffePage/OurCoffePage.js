import { HeaderStyle } from "../Header/headerStyle";

import ShoppingCart from "../ShoppingCart/ShoppingCart";

import styled from "styled-components";

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
      <footer style={{ height: 300, backgroundColor: "grey", marginTop: 40 }} />
    </>
  );
};

export default OurCoffePage;
