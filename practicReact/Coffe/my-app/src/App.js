import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainNav from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import OurCoffePage from "./components/OurCoffePage/OurCoffePage";
import PleasurePage from "./components/PleasurePage/PleasurePage";
import CreateCardItem from "./components/Card/card";

import {
  buyCoffeeActionCreator,
  filterCoffeActionCreator,
  resetCoffeCardActionCreator,
} from "./store/store";

const App = (props) => {
  const resetCoffeCard = () => {

    props.dispatch(resetCoffeCardActionCreator());
  };

  const onChangeText = (text) => {
    props.dispatch(filterCoffeActionCreator(text));
  };

  const onPurchase = (id) => {
    props.dispatch(buyCoffeeActionCreator(id));
  };

  const element = props.state.data.map((item) => {
    return <CreateCardItem card={item} key={item.id} onPurchase={onPurchase} />;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNav resetCoffeCard={resetCoffeCard} />}>
          <Route
            index
            element={
              <HomePage
                state={props.state}
                cardCoffee={element}
                onChangeText={onChangeText}
              />
            }
          />
          <Route
            path="/ourcoffee"
            element={<OurCoffePage state={props.state} cardCoffee={element} />}
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
