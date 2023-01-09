// part of the library
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//style
import "./index.css";
//state
import store from "./components/state/reduxStore";
// component
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App
    //  state={state} dispatch={store.dispatch.bind(store)}
    />
  </Provider>
);

// store.subscribe(() => {
//   let state = store.getState();
//   renderEntireTree(state);
// });

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
