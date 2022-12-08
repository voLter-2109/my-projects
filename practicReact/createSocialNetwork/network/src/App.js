import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import ErrorPage from "./components/profile/error/errorPage";

let state = {
  dialogs: {
    Ivan: ["hi", "hi Ivan"],
    Svet: ["hi", "hi Svet"],
    Alex: ["hi", "hi Alex"],
    Kost: ["hi", "hi Kost"],
    Saus: ["hi", "hi Saus"],
  },
};

function App() {
  return (
    <>
      <div className="app-wrapper">
        <Header />
        <NavBar />

        <div className="app-wrapper_content">
          <Routes>
            <Route index element={<Profile />} />
            <Route path="/dialogs/" element={<Dialogs />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
