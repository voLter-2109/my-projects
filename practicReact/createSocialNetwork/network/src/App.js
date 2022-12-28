import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Component } from "react";

import "./App.css";

import LayoutContainer from "./components/Layout/LayoutConteiner";
import ProfileContainer from "./components/profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ErrorPage from "./components/error/errorPage";


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutContainer />}>
              <Route index element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
