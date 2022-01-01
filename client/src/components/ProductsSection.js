import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./ProductsSection.css";

export default function ProductsSection({ queryProducts }) {
  return (
    <div className="cardsContainer">
      {queryProducts &&
        queryProducts.map((product) => (
          <Card key={product._id}>
            <Card.Img variant="top" src={product.imgUrl} />
            <Card.Body>
              <Card.Text>{product.name}</Card.Text>
              <Card.Text className="cardDesciption">{product.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}
