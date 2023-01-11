const Users = (props) => {
  let user = props.users.map((user) => {
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
  return user;
};

export default Users;
