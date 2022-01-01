import React from "react";
import styled from "styled-components";

const SideBar = styled.div`
  width: 8rem;

  & div {
    cursor: pointer;
    margin: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
  }

  @media (max-width: 730px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default function SideMenu({ handler }) {
  return (
    <SideBar>
      <div onClick={handler}>All</div>
      <div onClick={handler}>Movie</div>
      <div onClick={handler}>Monitor</div>
    </SideBar>
  );
}
