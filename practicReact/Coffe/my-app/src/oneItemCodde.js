import { Link } from "react-router-dom";

const oneItemCoffe = (props) => {
  console.log(props.name);
  return (
    <>
      <h1>New Page</h1>
      <Link to="/">Home</Link>
    </>
  );
};

export default oneItemCoffe;
