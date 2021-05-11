import { Body2 } from "elements/typo";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Button from "elements/Button";
import Router from "next/router";
import { useContext } from "react";
import { modalsContext } from "contexts/modalContext";
import Modals from "./Modals";
import axios from "axios";
import toast from "react-hot-toast";

interface Props {
  currentTabIndex: number;
  isLogin: boolean;
}

const Header = ({ currentTabIndex, isLogin }: Props) => {
  const { setRegisterModal, setLoginModal } = useContext(modalsContext);
  const handleLogout = async () => {
    try {
      await axios.get("/api/users/logout/");
      Router.reload();
    } catch (e) {
      e.error.map((error: string) => {
        toast.error("Unfortunately an unknown problem occurred");
      });

      console.log("Register Error=", e.response.data);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Modals />
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
        <UserSection>
          {!isLogin ? (
            <>
              <LoginButton
                label="Login"
                border={true}
                onClick={() => setLoginModal(true)}
              />
              <SignupButton
                label="Sign Up"
                onClick={() => setRegisterModal(true)}
              />
            </>
          ) : (
            <MyProfileButton
              // label="My Profile &#x025BD;"
              label="Logout"
              border={true}
              onClick={handleLogout}
            />
          )}
        </UserSection>
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
    isSelected ? "var(--primary-color-dark)" : "var(--color-text1)"};
`;
const UserSection = styled.div`
  display: flex;
  margin-left: auto;
`;
const LoginButton = styled(Button)`
  width: 88px;
  height: 46px;
  margin-right: 2.5rem;
`;
const SignupButton = styled(Button)`
  width: 104px;
  height: 46px;
`;
const MyProfileButton = styled(Button)`
  width: 149px;
  height: 48px;
  outline: none;
`;
