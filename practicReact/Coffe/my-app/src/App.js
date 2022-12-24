import { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainNav from "./pages/Header/Header";
import Home from "./pages/home/HomePage";
import OurCoffe from "./pages/OurCoffe/OurCoffe";
import Pleasure from "./pages/pleasure/Pleasure";

export default class App extends Component {
  constructor(props) {
    debugger;
    super(props);

    this.state = {
      data: [
        {
          name: "Solimo Coffee Beans 2 kg",
          prise: 10.73,
          country: "Brazil",
          best: "true",
          id: 1,
          url: "./img/coffe/presto.png",
        },
        {
          name: "Presto Coffee Beans 1 kg",
          prise: 15.99,
          country: "Kenya",
          best: "true",
          id: 2,
          url: "./img/coffe/AROMISTICO.png",
        },
        {
          name: "AROMISTICO Coffee 1 kg",
          prise: 6.99,
          country: "Columbia",
          best: "true",
          id: 3,
          url: "./img/coffe/solimo.png",
        },
        {
          name: "Presto Coffee Beans 1 kg",
          prise: 15.99,
          country: "Kenya",
          best: "true",
          id: 4,
          url: "./img/coffe/AROMISTICO.png",
        },
        {
          name: "AROMISTICO Coffee 1 kg",
          prise: 6.99,
          country: "Columbia",

          best: "true",
          id: 5,
          url: "./img/coffe/solimo.png",
        },
      ],
      basket: [],
    };
  }

  ShowBestCoffe = () => {
    const { data } = this.state;
    const newData = data.filter((item) => {
      if (item.best === "true") {
        return item;
      }
    });
    return newData;
  };

  onPurchase = (id) => {
    let newBasket = [...this.state.basket, id];
    this.setState({ basket: newBasket });
    console.log(this.state.basket);
  };

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainNav />}>
            <Route
              index
              element={
                <Home
                  data={this.ShowBestCoffe()}
                  onPurchase={this.onPurchase}
                />
              }
            />
            <Route
              path="/ourcoffee"
              element={<OurCoffe data={this.state.data} />}
            />

            <Route path="/foryourpleasure" element={<Pleasure />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
