import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import store from "./components/state/reduxStore";
import StoreContext from "./storeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={state}>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
