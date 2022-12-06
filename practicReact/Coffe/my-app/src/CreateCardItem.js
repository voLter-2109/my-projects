import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const CreateCardItem = (props) => {
  const { name, prise, country, best, url } = props;
  const faStar = best ? <i className="fas fa-star"></i> : "";
  return (
    <Card style={{ width: "18rem", padding: "10px" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          {country} {prise}${faStar}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link key={props.id} to={`/${name}`} {...props}>
          {" "}
          Просмотр{" "}
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CreateCardItem;
