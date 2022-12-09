import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}></div>
      <h1>New Social React Websites </h1>
    </header>
  );
};

export default Header;
