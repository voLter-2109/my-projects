import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/app/app.js";
// import StateTask from "./components/state-task/stateTask.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// const stateTask = ReactDOM.createRoot(document.getElementById("stateTask"));
// stateTask.render(<StateTask counter={0} />);
