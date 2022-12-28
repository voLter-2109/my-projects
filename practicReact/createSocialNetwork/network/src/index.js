import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./components/state/reduxStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
        //  state={state} dispatch={store.dispatch.bind(store)}
          />
      </Provider>
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

// test___________________________________________________________________
// import { Provider } from "react-redux";
// import App from "./components/test/AppTest";

// // без getState , Provider уже зает о store
// const rootTest = ReactDOM.createRoot(document.getElementById("root"));
// rootTest.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
