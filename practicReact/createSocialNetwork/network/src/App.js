import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Component } from "react";

import "./App.css";

import Layout from "./components/Layout/Layout";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import ErrorPage from "./components/error/errorPage";
import Dialog from "./components/Dialogs/Message";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  onDialogId = (id) => {
    this.setState({
      dialogId: id,
    });
  };
  dialogId = () => {
    let dialog = this.state.dialogs.find(
      (item) => item.id === this.state.dialogId
    );
    return dialog;
  };

  render() {
    const message = this.dialogId();
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* start profile component */}
              <Route
                index
                element={<Profile stateProfile={this.state.profile} />}
              />
              {/* end */}

              {/* start dialog component */}
              <Route
                path="/dialogs"
                element={
                  <Dialogs onDialogId={this.onDialogId} data={this.state} />
                }
              >
                <Route
                  path="/dialogs/:id"
                  element={<Dialog data={message} />}
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
