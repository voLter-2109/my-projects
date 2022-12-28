// style
import s from "../Profile.module.scss";

const HeaderProfile = (props) => {
  const { name, urlAvatar, urlMainPhoto } = props.state;
  // debugger;
  return (
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
  );
};

export default HeaderProfile;
