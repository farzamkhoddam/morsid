import styled from "styled-components";
import Logo from "./logo";
import { device } from "../consts/theme";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 3rem;
  max-width: 70%;
`;
const LogoContainer = styled.div`
  padding-left: 1rem;
  background: var(--header-bg-light);
  z-index: 3;
  @media ${device.tablet} {
    background: var(--header-bg-dark);
  }
`;
