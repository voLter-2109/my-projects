// part of the library
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Component } from "react";
// style
import "./App.css";
// component
import LayoutContainer from "./components/Layout/LayoutConteiner";
import ProfileContainer from "./components/profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ErrorPage from "./components/error/errorPage";
import UsersContainer from "./components/Users/UsersContainer";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutContainer />}>
              <Route index element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
