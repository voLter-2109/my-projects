import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function BtnModalWindow(props) {
  const [lgShow, setLgShow] = useState(false);
  const onClickBuy = () => {
    props.onPurchase(props.data.id);
  };
  return (
    <>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>

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
        <Modal.Body>
          <button onClick={onClickBuy}>Buy</button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BtnModalWindow;
