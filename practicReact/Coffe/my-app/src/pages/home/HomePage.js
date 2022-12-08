import { Component, Fragment } from "react";
import { HeaderStyle } from "../Header/headerStyle";
import styled from "styled-components";

import CreateCardItem from "../Card/card";

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

const MainBlock = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

const CardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-around;
  margin-top: 20px;
`;

export default class Home extends Component {
  CreateList = () => {
    const element = this.props.data.map((item) => {
      const { id, ...itemsProps } = item;
      return <CreateCardItem key={id} {...itemsProps} />;
    });

    return <MainBlock>{element}</MainBlock>;
  };

  render() {
    return (
      <Fragment>
        <HeaderStyle>
          <h1>Everything You Love About Coffee</h1>
          <div>
            <img src="./img/logoWhite.svg" alt="logo coffe" />
          </div>
          <h2>
            We makes every day full of energy and taste <br />
            Want to try our beans?
          </h2>
          <button>More</button>
        </HeaderStyle>
        <AboutUs>
          <h2 style={{ fontSize: 50 }}>About Us</h2>
          <div>
            <img src="./img/logoBlack.svg" alt="logo coffe" />
          </div>
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face. N
          </p>
          <p>
            ow residence dashwoods she excellent you. Shade being under his bed
            her, Much read on as draw. Blessing for ignorant exercise any
            yourself unpacked. Pleasant horrible but confined day end marriage.
            Eagerness furniture set preserved far recommend. Did even but nor
            are most gave hope. Secure active living depend son repair day
            ladies now.
          </p>
        </AboutUs>
        <CardsBlock>{this.CreateList()}</CardsBlock>

        <footer
          style={{ height: 300, backgroundColor: "grey", marginTop: 40 }}
        />
      </Fragment>
    );
  }
}
