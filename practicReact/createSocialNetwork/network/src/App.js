import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import ErrorPage from "./components/error/errorPage";
import Dialog from "./components/Dialogs/Dialog";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogId: "0",
      dialogs: [
        { name: "", id: "0", message: [null] },
        { name: "Ivan", id: "1", message: ["hi", "hi Ivan"] },
        { name: "Sau", id: "2", message: ["hi", "hi Sau"] },
        { name: "Kost", id: "3", message: ["hi", "hi Kost"] },
        { name: "Ros", id: "4", message: ["hi", "hi Ros"] },
      ],
    };
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
    const test = this.dialogId();
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Profile />} />
            <Route
              path="/dialogs"
              element={
                <Dialogs onDialogId={this.onDialogId} data={this.state} />
              }
            >
              <Route path="/dialogs/:id" element={<Dialog data={test} />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
