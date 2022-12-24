import { Component, Fragment } from "react";
import { HeaderStyle } from "../Header/headerStyle";
import styled from "styled-components";

import CreateCardItem from "../Card/card";

const HeaderOurCoffe = styled(HeaderStyle)`
  background-image: url("./img/header/ourCoffe.png");
  height: 30vh;
`;

export default class OurCoffe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterInput: "",
      filterBtn: null,
    };
  }
  ShowCoffe = () => {
    const element = this.props.data.map((item) => {
      return (
        <CreateCardItem
          card={item}
          key={item.id}
          onPurchase={this.props.onPurchase}
        />
      );
    })

    return <>{element}</>;
  };

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { filterInput } = this.state;
    return (
      <Fragment>
        <HeaderOurCoffe>
          <h1>Our Coffee</h1>
        </HeaderOurCoffe>
        <input
          name="filterInput"
          type="text"
          placeholder="Поиск"
          value={filterInput}
          onChange={this.onValueChange}
        />
        <div
          style={{
            width: "80vw",
            margin: "0 auto",
            marginTop: "40px",
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {this.ShowCoffe()}
        </div>
      </Fragment>
    );
  }
}
