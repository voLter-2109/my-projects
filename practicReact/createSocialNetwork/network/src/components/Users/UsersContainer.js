// part of the library
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";

// actionCreator
import { followAC, setUsersAC, unFollowAC } from "../state/usersReducer";

class UsersContainer extends React.Component {
  constructor(props){
    super(props);
    axios
        .get("http://localhost:3001/users")

        .then((response) => {
          console.log(1);
          this.props.setUsers(response.data);
        });
  }
  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     axios
  //       .get("http://localhost:3001/users")

  //       .then((response) => {
  //         console.log(1);
  //         this.props.setUsers(response.data);
  //       });
  //   }
  // };

  render = () => {
    return (
      <div>
        {/* <button onClick={this.getUsers}>getUsers</button> */}
        {this.props.users.map((user) => {
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
                  <button onClick={() => this.props.unFollow(user.id)}>
                    Follow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(user.id)}>
                    unFollow
                  </button>
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
        })}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
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
