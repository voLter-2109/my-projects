import s from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  const { name, urlAvatar, urlMainPhoto, posts } = props.stateProfile;
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
        <MyPosts data={posts} />
      </div>
    </>
  );
};

export default Profile;
