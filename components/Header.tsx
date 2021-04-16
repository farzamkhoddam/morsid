import { Body2, H2 } from "elements/typo";
import React from "react";
import styled from "styled-components";
import { device } from "../consts/device";
import Image from "next/image";

interface Props {
  currentTabIndex: number;
}
const Header = ({ currentTabIndex }: Props) => {
  return (
    <Container>
      <Wrapper>
        <a style={{ marginRight: "40px" }} href="/">
          <Image
            src="/svgs/logo.svg"
            alt={"Logo"}
            width={131}
            height={33}
            quality={100}
          />
        </a>

        <Nav>
          <NavItem isSelected={currentTabIndex === 0}>
            <a style={{ marginRight: "40px" }} href="/experts">
              Experts
            </a>
          </NavItem>
          <NavItem isSelected={currentTabIndex === 1}>
            <a style={{ marginRight: "40px" }} href="/how-its-work">
              How its works
            </a>
          </NavItem>
          <NavItem isSelected={currentTabIndex === 2}>
            <a href="/about">About us</a>
          </NavItem>
        </Nav>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.header`
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
const NavItem = styled(Body2)<{ isSelected: any }>`
  color: ${({ isSelected }) =>
    isSelected ? "var(--primary-color-dark)" : "var(--text-color-dark)"};
`;
