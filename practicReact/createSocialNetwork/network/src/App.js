import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Component } from "react";

import "./App.css";

import Layout from "./components/Layout/Layout";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import ErrorPage from "./components/error/errorPage";
import Dialog from "./components/Dialogs/Dialog";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Layout stateSidebar={this.props.state.sidebar} />}
            >
              {/* start profile component */}
              <Route
                index
                element={
                  <Profile
                    stateProfile={this.props.state.profile}
                    dispatch={this.props.dispatch}
                  />
                }
              />
              {/* end */}

              {/* start dialog component */}
              <Route
                path="/dialogs"
                element={
                  <Dialogs
                    dialogs={this.props.state.dialogs}
                    dispatch={this.props.dispatch}
                  />
                }
              >
                <Route
                  path="/dialogs/:id"
                  element={
                    <Dialog message={this.props.state.dialogs.message} />
                  }
                />
              </Route>
              {/* end */}

              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
