import React from "react";
import styled from "styled-components";
import { Body3, H3 } from "elements/typo";

export default function Experts() {
  return (
    <Container>
      <H3>Our Experts</H3>
      <Body3>
        Get help our experts about how to scale your company fast and in
        effective way
      </Body3>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
