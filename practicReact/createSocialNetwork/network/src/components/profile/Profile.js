import s from "./Profile.module.scss";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  debugger;
  const { name, urlAvatar, urlMainPhoto } = props.stateProfile;

  return (
    <>
      <div className={s.profile}>
        <div
          className={s.profileImg}
          style={{ backgroundImage: `url(${urlMainPhoto})` }}
        >
          <div className={s.profileCard}>
            <div className={s.avatar}>
              <img src={urlAvatar} alt="avatar" />
            </div>
            <div className={s.name}>{name}</div>
          </div>
        </div>
        <MyPostsContainer
          state={props.stateProfile}
          dispatch={props.dispatch}
        />
      </div>
    </>
  );
};

export default Profile;
