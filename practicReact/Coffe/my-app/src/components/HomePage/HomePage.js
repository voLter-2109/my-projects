import { HeaderStyle } from "../Header/headerStyle";
import styled from "styled-components";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const AboutUs = styled.div`
  display: block;
  width: 55vw;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;

  div {
    margin-top: 20px;
    position: relative;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      right: 32%;
      width: 100px;
      border: 1px solid black;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 32%;
      width: 100px;
      border: 1px solid black;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
  }
  p {
    margin-top: 20px;
    font-size: 1.3em;
  }
`;

const HomePage = (props) => {
  return (
    <>
      <HeaderStyle>
        <h1>Everything You Love About Coffee</h1>
        <div>
          <img src="./img/logoWhite.svg" alt="logo coffe" />
        </div>
        <h2>We makes every day full of energy and taste</h2>
      </HeaderStyle>
      <AboutUs>
        <h2>About Us</h2>
        <div>
          <img src="./img/logoBlack.svg" alt="logo coffe" />
        </div>
        <p>
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible. Afraid at highly months do things on at. Situation
          recommend objection do intention so questions. As greatly removed
          calling pleased improve an. Last ask him cold feel met spot shy want.
          Children me laughing we prospect answered followed. At it went is song
          that held help face.
        </p>
        <p>
          Now residence dashwoods she excellent you. Shade being under his bed
          her, Much read on as draw. Blessing for ignorant exercise any yourself
          unpacked. Pleasant horrible but confined day end marriage. Eagerness
          furniture set preserved far recommend. Did even but nor are most gave
          hope. Secure active living depend son repair day ladies now.
        </p>
      </AboutUs>
      <h2>Bestseller</h2>
      <div className="cardBlock">
        <props.bestCoffeeCards />
      </div>
      <ShoppingCart state={props.state.basket} 
        delBuyCoffee={props.delBuyCoffee}
      />
      <footer style={{ height: 300, backgroundColor: "grey", marginTop: 40 }} />
    </>
  );
};

export default HomePage;
