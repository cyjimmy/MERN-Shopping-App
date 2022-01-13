import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Modal from "./Modal";
import "./ProductsSection.css";
import axios from "axios";

export default function ProductsSection({ queryProducts, loading }) {
  const [displayModal, setDisplayModal] = useState(false);
  const [chosenProduct, setChosenProduct] = useState(null);

  const cardClickHandler = async (e) => {
    const queryProduct = await axios.get(
      `/products/id/${e.target.parentNode.id}`
    );
    setChosenProduct(queryProduct.data[0]);
    setDisplayModal(true);
  };

  const closeModalHandler = () => {
    setDisplayModal(false);
  };

  if (loading) {
    return (
      <div className="cardsContainer">
        <div className="loadingText">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="cardsContainer">
        {queryProducts &&
          queryProducts.map((product) => (
            <Card key={product._id} id={product._id} onClick={cardClickHandler}>
              <div className="imgContainer">
                <Card.Img loading="lazy" variant="top" src={product.imgUrl} />
              </div>
              <Card.Body>
                <Card.Text>{product.name}</Card.Text>
                <Card.Text>$ {product.price}</Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
      <Modal
        displayModal={displayModal}
        closeModal={closeModalHandler}
        chosenProduct={chosenProduct}
      />
    </>
  );
}
