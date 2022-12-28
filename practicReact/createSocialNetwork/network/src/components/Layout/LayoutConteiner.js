// part of the library
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
// component
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
// style
import s from "./Layout.module.scss";

const LayoutContainer = (props) => {
  return (
    <>
      <div className="app-wrapper">
        <Header />
        <NavBar frineds={props.profile.friends} />

        <div className={s.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

function mapStateToProps(store) {
  return {
    profile: store.sidebar,
  };
}

export default connect(mapStateToProps, null)(LayoutContainer);
