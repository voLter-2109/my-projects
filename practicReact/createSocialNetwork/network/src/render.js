import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { addPost, updateNewPost } from "./components/state/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPost={updateNewPost} />
    </React.StrictMode>
  );
};
