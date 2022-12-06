import { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <h1>Ooops...</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae,
          atque.
        </p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
