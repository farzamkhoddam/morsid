import { Body2, H2 } from "elements/typo";
import React from "react";
import styled from "styled-components";
import { device } from "../consts/device";
import Image from "next/image";

interface Props {
  currentTabIndex: number;
}
const Footer = ({ currentTabIndex }: Props) => {
  return (
    <Container>
      <Wrapper>
        <a style={{ marginRight: "2.5rem" }} href="/">
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
            <a style={{ marginRight: "2.5rem" }} href="/experts">
              Experts
            </a>
          </NavItem>
          <NavItem isSelected={currentTabIndex === 1}>
            <a style={{ marginRight: "2.5rem" }} href="/how-its-work">
              How its works
            </a>
          </NavItem>
          {/* <NavItem isSelected={currentTabIndex === 2}>
            <a href="/about">About us</a>
          </NavItem> */}
        </Nav>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  height: 110px;
  border-top: 1px solid var(--border-color-dark);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
