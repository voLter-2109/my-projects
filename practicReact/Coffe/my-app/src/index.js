import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import store from "./store/store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
};

renderEntireTree(store.getstate());

store.subscribe(() => {
  let state = store.getstate();
  renderEntireTree(state);
});
