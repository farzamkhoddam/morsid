import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { device } from "../../consts/theme";
import { useWindowSize } from "hooks/useWindowSize";
import React from "react";
import SmartCompBaseOnLogin from "components/smartCompBaseOnLogin";
import { Viewer_viewer as User } from "../../wpapi";

interface Props {
  user: User;
}

const HomeMenu = ({ user }: Props) => {
  const windowSize = useWindowSize();
  function getSmartLogoWidth() {
    return windowSize.width > 425 ? 120 : 95;
  }
  function getSmartLogoHeight() {
    return windowSize.width > 425 ? 47 : 37;
  }
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Image
            src="/logo-accent.svg"
            alt="Logo"
            width={getSmartLogoWidth()}
            height={getSmartLogoHeight()}
          />
        </LogoContainer>
        {typeof window && (
          <SmartCompBaseOnLogin
            doesNotLogin={
              <Link href="/login">
                <LoginButton>Login</LoginButton>
              </Link>
            }
            loginWithoutSubscribed={
              <Link href="/account">
                <LoginButton>My Profile</LoginButton>
              </Link>
            }
            loginWithSubscribed={
              <Link href="/account">
                <LoginButton>My Profile</LoginButton>
              </Link>
            }
            user={user}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default HomeMenu;

const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: var(--header-height-desktop);
  background-color: var(--primary-color-normal);
  position: fixed;
  top: 0;
  z-index: 90;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 2rem;
  @media ${device.mobileL}{
    padding 0 22px;
  }
`;
const LoginButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 164px;
  height: 56px;
  background: var(--primary-color-normal);
  border: 2px solid var(--accent-color-normal);
  box-sizing: border-box;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: var(--accent-color-normal);
  &:hover {
    background: radial-gradient(
      100% 1655.01% at 0% 6.25%,
      #d49844 0%,
      #fee7b1 35.61%,
      #fee6af 67.08%,
      #f6c757 100%
    );
    color: var(--primary-color-normal);
  }
  @media ${device.tabletM} {
    width: 110px;
    height: 52px;
    font-size: 16px;
    line-height: 20px;
  }
  @media ${device.mobileL} {
    width: 100px;
    height: 44px;
    font-size: 16px;
    line-height: 20px;
  }
`;
const LogoContainer = styled.div`
  width: 100px;
`;
