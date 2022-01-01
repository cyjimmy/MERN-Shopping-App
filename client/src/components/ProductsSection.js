import React, { useState } from "react";
import { Card } from "react-bootstrap";

export default function ProductsSection({ queryProducts }) {
  const [products, setProducts] = useState(queryProducts);
  return (
    <div>
      {queryProducts &&
        queryProducts.map((product) => (
          <Card key={product._id}>
            <Card.Img variant="top" src={product.imgUrl} />
            <Card.Body>
              <Card.Text>{product.name}</Card.Text>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}
