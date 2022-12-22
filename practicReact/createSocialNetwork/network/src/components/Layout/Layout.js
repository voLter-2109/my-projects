import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import s from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <>
      <div className="app-wrapper">
        <Header />
        <NavBar frineds={props.stateSidebar.friends} />

        <div className={s.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
