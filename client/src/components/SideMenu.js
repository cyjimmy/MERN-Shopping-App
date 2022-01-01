import React from "react";
import styled from "styled-components";

const SideBar = styled.div`
  padding: 1.5rem;
  padding-right: 3rem;
  & div {
    cursor: pointer;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
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
