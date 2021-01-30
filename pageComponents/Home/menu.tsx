import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { device } from "../../consts/theme";
import { useWindowSize } from "hooks/useWindowSize";

const HomeMenu = () => {
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
        <Link href="/login">
          <LoginButton>Login</LoginButton>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default HomeMenu;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: var(--header-height-desktop);
  background-color: var(--primary-color-normal);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 2rem;
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
