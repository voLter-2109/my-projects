import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import s from "./ShoppingCart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ShoppingCart(props) {
  const Test = () => {
    let test = props.state.map((item) => {
      return (
        <tr>
          <td style={{ border: "1px solid black" }}>{item.name}</td>
          <td style={{ border: "1px solid black" }}>{item.prise}</td>
        </tr>
      );
    });

    return test;
  };
  const Prise = () => {
    let total = 0;
    props.state.map((item) => {
      return (total += +item.prise);
    });
    return total + "$";
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className={s.shopping}
        variant="primary"
        onClick={handleShow}
        style={{ position: "sticky" }}
      >
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ width: 30, height: 30 }}
        />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <table>
            <tbody>
              <tr>
                <th style={{ border: "1px solid black" }}>Name</th>
                <th style={{ border: "1px solid black" }}>Prise</th>
              </tr>

              <Test />
            </tbody>
          </table>
          <Prise />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ShoppingCart;
