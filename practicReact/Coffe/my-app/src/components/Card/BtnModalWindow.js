import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import s from "./card.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function BtnModalWindow(props) {
  const [lgShow, setLgShow] = useState(false);

  const onClickBuy = (e) => {
    let id = e.target.parentNode.getAttribute("data-id");
    props.onPurchase(id);
  };

  return (
    <>
      <Button onClick={() => setLgShow(true)} className={s.btnModalWindow}>
        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {props.data.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body data-id={props.data.id}>
          <button
            onClick={(e) => {
              onClickBuy(e);
            }}
          >
            Buy
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BtnModalWindow;
