import { Body2, H2 } from "elements/typo";
import React from "react";
import styled from "styled-components";
import { device } from "../consts/device";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <H2>
          <a style={{ marginRight: "40px" }} href="/">
            LOGO
          </a>
        </H2>
        <Nav>
          <Body2>
            <a style={{ marginRight: "40px" }} href="/experts">
              Experts
            </a>
          </Body2>
          <Body2>
            <a style={{ marginRight: "40px" }} href="/how-its-work">
              How its works
            </a>
          </Body2>
          <Body2>
            <a href="/about">About us</a>
          </Body2>
        </Nav>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  height: var(--header-height-desktop);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: var(--page-max-width);
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
