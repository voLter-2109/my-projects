import { Link, useMatch } from "react-router-dom";
// хук на проверку активной ссылки, хуки в классовом компоненте не вызываются

const CustomLink = ({ children, to, ...props }) => {
  const math = useMatch(to);

  return (
    <Link to={to} style={{ color: math ? "red" : "white" }} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
