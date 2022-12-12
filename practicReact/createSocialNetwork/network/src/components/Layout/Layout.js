import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import s from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <div className="app-wrapper">
        <Header />
        <NavBar />
      
      <div className={s.content}>
        <Outlet />
      </div>
      </div>
    </>
  );
};

export default Layout;
