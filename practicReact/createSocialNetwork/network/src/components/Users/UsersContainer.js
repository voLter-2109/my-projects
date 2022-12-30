// part of the library
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// actionCreator
import { followAC, setUsersAC, unFollowAC } from "../state/usersReducer";

const UsersContainer = (props) => {
  // debugger;
  return props.users.users.map((user) => {
    return (
      <div
        key={user.id}
        style={{
          display: "flex",
          flexDirection: "row",
          border: "1px solid black",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img style={{ width: "100px" }} src={user.fotoUrl} alt="" />
          {user.followed ? (
            <button onClick={() => props.unFollow(user.id)}>Follow</button>
          ) : (
            <button onClick={() => props.follow(user.id)}>unFollow</button>
          )}
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </div>
          <div>
            <div>{user.location.city}</div>
            <div>{user.location.country}</div>
          </div>
        </div>
      </div>
    );
  });
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    follow: bindActionCreators(followAC, dispatch),
    unFollow: bindActionCreators(unFollowAC, dispatch),
    setUsers: bindActionCreators(setUsersAC, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
