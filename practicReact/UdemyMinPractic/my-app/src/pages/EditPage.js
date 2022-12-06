import { useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit post {id}</h1>
    </div>
  );
};

export default EditBlog;
