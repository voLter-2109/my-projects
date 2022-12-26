import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import s from "./ShoppingCart.module.scss";

function ShoppingCart(props) {
  const test = (e) => {
    if (e.target && e.target.nodeName === "BUTTON") {
      props.delBuyCoffee(e.target.getAttribute("data-id"));
    }
  };

  const CreateCard = () => {
    let id = -1;
    let cardRow = props.state.map((item) => {
      id++;
      return (
        <tr key={id}>
          <td >{item.name}</td>
          <td >{item.prise + " $"}</td>
          <td style={{ paddingLeft: "10px" }}>
            <button
              data-id={id}
              onClick={(e) => test(e)}
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "black",
              }}
            ></button>
          </td>
        </tr>
      );
    });

    return cardRow;
  };

  const Prise = () => {
    let total = 0;
    props.state.map((item) => {
      return (total += +item.prise);
    });
    return "Total:   " + total.toFixed(2) + " $";
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
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th >Name</th>
                <th >Prise</th>
                <th></th>
              </tr>

              <CreateCard />
            </tbody>
          </Table>
          <Prise />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ShoppingCart;
