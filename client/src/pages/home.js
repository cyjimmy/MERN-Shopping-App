import React from "react";
import styled from "styled-components";
import Content from "../components/Content";
import Hero from "../components/Hero";

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92%;
`;

export default function Home() {
  return (
    <HomeContent>
      <Hero />
    </HomeContent>
  );
}
