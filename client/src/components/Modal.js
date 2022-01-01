import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useCartUpdate } from "../context/CartContext";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 500;
`;

const ModalContainer = styled.div`
  position: fixed;
  height: 50%;
  width: 30%;
  min-width: fit-content;
  min-height: fit-content;
  top: 50%;
  left: 50%;
  z-index: 600;
  border: 1px solid white;
  background-color: white;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 2rem;

  & * {
    margin-bottom: 1rem;
  }
`;

const ModalImg = styled.img`
  height: 65%;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  & * {
    margin-right: 0.5rem;
  }
`;

export default function Modal({ displayModal, closeModal, chosenProduct }) {
  const updateCart = useCartUpdate();

  const addItemToCart = () => {
    closeModal();
    updateCart();
  };

  return (
    <>
      {displayModal && chosenProduct && (
        <>
          <Overlay onClick={closeModal}></Overlay>
          <ModalContainer>
            <ModalImg src={chosenProduct.imgUrl} />
            <div>{chosenProduct.name}</div>
            <div>$ {chosenProduct.price}</div>
            <ButtonGroup>
              <Button onClick={addItemToCart}>Add to Cart</Button>
              <Button onClick={closeModal}>Close</Button>
            </ButtonGroup>
          </ModalContainer>
        </>
      )}
    </>
  );
}
