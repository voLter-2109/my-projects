import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainNav from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import OurCoffePage from "./components/OurCoffePage/OurCoffePage";
import PleasurePage from "./components/PleasurePage/PleasurePage";
import CreateCardItem from "./components/Card/card";

import {
  buyCoffeeActionCreator,
  delBuyCoffeeActionCreator,
  filterCoffeActionCreator,
  resetCoffeCardActionCreator,
} from "./store/store";

const App = (props) => {
  const delBuyCoffee = (id) => {
    console.log(id);
    props.dispatch(delBuyCoffeeActionCreator(id));
  };

  const resetCoffeCard = () => {
    props.dispatch(resetCoffeCardActionCreator());
  };

  const onChangeText = (text) => {
    props.dispatch(filterCoffeActionCreator(text));
  };

  const onPurchase = (id) => {
    props.dispatch(buyCoffeeActionCreator(id));
  };

  const coffeeCards = props.state.data.map((item) => {
    return <CreateCardItem card={item} key={item.id} onPurchase={onPurchase} />;
  });

  const bestCoffeeCards = () => {
    let bestCoffee = [];
    props.state.data.forEach((item) => {
      if (item.best === "true") {
        return bestCoffee.push(item);
      }
    });
    let bestCoffeeCard = bestCoffee.map((item) => {
      return (
        <CreateCardItem card={item} key={item.id} onPurchase={onPurchase} />
      );
    });

    return bestCoffeeCard;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNav resetCoffeCard={resetCoffeCard} />}>
          <Route
            index
            element={
              <HomePage
                state={props.state}
                bestCoffeeCards={bestCoffeeCards}
                delBuyCoffee={delBuyCoffee}
              />
            }
          />
          <Route
            path="/ourcoffee"
            element={
              <OurCoffePage
                state={props.state}
                cardCoffee={coffeeCards}
                onChangeText={onChangeText}
                delBuyCoffee={delBuyCoffee}
              />
            }
          />

          <Route
            path="/foryourpleasure"
            element={<PleasurePage state={props.state} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
