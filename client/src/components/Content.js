import React, { Children } from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default function Content({ children }) {
  return <ContentContainer>{children}</ContentContainer>;
}
