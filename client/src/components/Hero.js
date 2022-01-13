import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://icdn.digitaltrends.com/image/digitaltrends/dell-ultrasharp-27-4k-premiercolor-monitor-front.jpg);
  background-size: cover;
  background-repear: no-repeat;
  background-position: top;
  display: flex;
  position: relative;
`;

const HeroText = styled.div`
  font-size: 3rem;
  color: white;
  margin: auto;
  text-align: center;
  z-index: 1;

  & button {
    margin-top: 1rem;
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 15px;
    border: 0;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: 2px solid transparent;
    transition: 0.5s;
  }

  & button:hover {
    cursor: pointer;
    border: 2px solid white;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px) brightness(50%);
`;

export default function Hero() {
  return (
    <HeroContainer>
      <HeroOverlay />
      <HeroText>
        <div>Welcome to the MERN Store!</div>
        <Link to="/product"><button>Start Shopping</button></Link>
      </HeroText>
    </HeroContainer>
  );
}
