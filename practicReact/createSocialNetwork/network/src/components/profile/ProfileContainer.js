// part of the library
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// actionCreator
import {
  addPostActionCreator,
  updatNewPostTextActionCreator,
} from "../state/profileReducer";
// component
import MyPosts from "./MyPosts/MyPosts";
import HeaderProfile from "./MyHeaderProfile/HeaderProfile";
// style
import s from "./Profile.module.scss";
// lodash
const omit = require("lodash/omit");
const pick = require("lodash/pick");

const ProfileContainer = (props) => {
  return (
    <>
      <div className={s.profile}>
        <HeaderProfile state={omit(props.profile, ["posts", "newPostText"])} />
        <MyPosts
          state={pick(props.profile, ["posts", "newPostText"])}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addPost: bindActionCreators(addPostActionCreator, dispatch),
    updateNewPostText: bindActionCreators(
      updatNewPostTextActionCreator,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
