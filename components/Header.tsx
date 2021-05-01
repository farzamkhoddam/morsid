import { Body2 } from "elements/typo";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Button from "elements/Button";
import RegisterModal from "./modals/RegisterModalStep1";

interface Props {
  currentTabIndex: number;
  isLogin: boolean;
}
const Header = ({ currentTabIndex, isLogin }: Props) => {
  const [isOpenRegisterModal, setisOpenRegisterModal] = useState<boolean>(true);

  return (
    <Container>
      <Wrapper>
        <RegisterModal
          isOpen={isOpenRegisterModal}
          setIsOpen={setisOpenRegisterModal}
        />
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
                onClick={() => setisOpenRegisterModal(true)}
              />
              <SignupButton label="Sign Up" />
            </>
          ) : (
            <MyProfileButton label="My Profile &#x025BD;" border={true} />
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
    isSelected ? "var(--primary-color-dark)" : "var(--text-color-dark)"};
`;
const UserSection = styled.div`
  display: flex;
  margin-left: auto;
`;
const LoginButton = styled(Button)`
  width: 88px;
  height: 46px;
  margin-right: 40px;
`;
const SignupButton = styled(Button)`
  width: 104px;
  height: 46px;
`;
const MyProfileButton = styled(Button)`
  width: 149px;
  height: 48px;
`;
