import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 92vh;
  background-color: grey;
`;

const ItemContainer = styled.div`
  width: 90%;
  max-width: 50rem;
  height: 10rem;
  display: flex;
  margin: 0.5rem auto;
  border: 1px solid black;
  background-color: white;
  border-radius: 15px;
  text-align: center;
  padding: 10px;
  @media (max-width: 730px) {
    max-width: 30rem;
    flex-direction: column;
    height: 15rem;
    padding: 0.5rem 0;
  }
`;

const ImgContainer = styled.div`
  width: 30%;
  & img {
    height: 100%;
  }
  @media (max-width: 730px) {
    width: 100%;
    height: 60%;
  }
`;

const ItemName = styled.div`
  width: 40%;
  margin: auto;
  @media (max-width: 730px) {
    width: 100%;
  }
`;

const ItemPrice = styled.div`
  width: 15%;
  margin: auto;
  @media (max-width: 730px) {
    width: 100%;
  }
`;

const ButtonStyle = {
  fontSize: "0.9rem",
  width: "4rem",
  margin: "auto",
  padding: "0.2rem",
};

export default function Cart() {
  const cartCtx = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const add = (accumulator, a) => {
      return accumulator + a;
    };
    setTotal(
      cartCtx.itemList
        .map((item) => item.price)
        .reduce(add, 0)
        .toFixed(2)
    );
  }, [cartCtx]);

  return (
    <CartContent>
      {cartCtx.itemList &&
        cartCtx.itemList.map((item) => (
          <ItemContainer key={item._id}>
            <ImgContainer>
              <img src={item.imgUrl} alt="product" />
            </ImgContainer>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>$ {item.price}</ItemPrice>
            <Button
              bg="danger"
              style={ButtonStyle}
              onClick={() => {
                cartCtx.removeItem(item);
              }}
            >
              Remove
            </Button>
          </ItemContainer>
        ))}
      <ItemContainer
        style={{ height: "3rem", fontSize: "1.2rem", justifyContent: "center" }}
      >
        Total: $ {total}
      </ItemContainer>
    </CartContent>
  );
}
