import React from "react";
import { useCart } from "../context/CartContext";
import styled from "styled-components";

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 92vh;
  background-color: grey;
`;

const ItemContainer = styled.div`
  width: 80%;
  max-width: 40rem;
  height: 10rem;
  display: flex;
  margin: 0.5rem auto;
  border: 1px solid black;
  background-color: white;
  border-radius: 15px;
  text-align: center;
  padding: 10px;

  @media (max-width: 730px) {
    flex-direction: column;
    height: 15rem;
  }
`;

const ImgContainer = styled.div`
  width: 30%;

  & img {
    height: 100%;
  }

  @media (max-width: 730px) {
    width: 100%;
    height: 70%;
  }
`;

const ItemName = styled.div`
  margin: auto;
`;

const ItemPrice = styled.div`
  margin: auto;
`;

export default function Cart() {
  const cartCtx = useCart();

  return (
    <CartContent>
      {cartCtx.itemList &&
        cartCtx.itemList.map((item) => (
          <ItemContainer key={item.id}>
            <ImgContainer>
              <img src={item.imgUrl} alt="product"/>
            </ImgContainer>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price}</ItemPrice>
          </ItemContainer>
        ))}
    </CartContent>
  );
}
