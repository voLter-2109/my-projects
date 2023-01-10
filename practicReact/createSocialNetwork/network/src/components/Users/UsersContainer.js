// part of the library
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";

// actionCreator
import {
  followAC,
  setCurrentPage,
  setTotalCount,
  setUsersAC,
  unFollowAC,
} from "../state/usersReducer";

// style
import s from "./UsersStyle.module.scss";

class UsersContainer extends React.Component {
  componentDidMount = () => {
    axios.get("http://localhost:3001/total").then((response) => {
      this.props.setTotalCount(response.data[0]);
    });

    axios
      .get(
        `http://localhost:3001/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data);
      });
  };

  onPageChenged = (currentPage) => {
    this.props.setCurrentPage(currentPage);

    axios
      .get(
        `http://localhost:3001/users?_page=${currentPage}&_limit=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data);
      });
  };

  render = () => {
    debugger;
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                onClick={() => this.onPageChenged(p)}
                key={p}
                className={
                  this.props.currentPage === p ? s.selectPage : undefined
                }
              >
                {p}
              </span>
            );
          })}
        </div>
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
    pageSize: state.users.pageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    follow: bindActionCreators(followAC, dispatch),
    unFollow: bindActionCreators(unFollowAC, dispatch),
    setUsers: bindActionCreators(setUsersAC, dispatch),
    setCurrentPage: bindActionCreators(setCurrentPage, dispatch),
    setTotalCount: bindActionCreators(setTotalCount, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
