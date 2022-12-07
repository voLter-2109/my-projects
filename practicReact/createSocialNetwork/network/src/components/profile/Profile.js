import s from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <>
      <div className={s.profile}>
        <div className={s.profileImg}>
          <div className={s.profileCard}>
            <div className={s.avatar}></div>
            <div className={s.name}>Aleksey Flechin </div>
          </div>
        </div>
        <MyPosts />
      </div>
    </>
  );
};

export default Profile;
