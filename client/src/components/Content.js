import React, { Children } from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 730px) {
    flex-direction: column;
  }
`;

export default function Content({ children }) {
  return <ContentContainer>{children}</ContentContainer>;
}
