import styled from "styled-components";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Container from "react-bootstrap/Container";

import { HeaderStyle, AboutUs } from "../Header/headerStyle";
import Footer from "../Footer/Footer";


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
      <Container style={{textAlign: "center"}}>
        <AboutUs>
          <h2>About Us</h2>
          <div>
            <img src="./img/logoBlack.svg" alt="logo coffe" />
          </div>
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face.
          </p>
          <p>
            Now residence dashwoods she excellent you. Shade being under his bed
            her, Much read on as draw. Blessing for ignorant exercise any
            yourself unpacked. Pleasant horrible but confined day end marriage.
            Eagerness furniture set preserved far recommend. Did even but nor
            are most gave hope. Secure active living depend son repair day
            ladies now.
          </p>
        </AboutUs>
        <h2 style={{marginTop: "40px"}}>Bestseller</h2>
        <div className="cardBlock">
          <props.bestCoffeeCards />
        </div>
      </Container>
      <ShoppingCart
        state={props.state.basket}
        delBuyCoffee={props.delBuyCoffee}
      />
      <Footer/>
    </>
  );
};

export default HomePage;
