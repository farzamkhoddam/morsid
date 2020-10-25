import styled from "styled-components";
import LogoImage from "./logo";
import { device } from "../consts/theme";

const HalfHeaderLogo = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage />
      </LogoContainer>
    </HeaderContainer>
  );
};
export default HalfHeaderLogo;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height-desktop);
  width: 100%;
  @media ${device.tablet} {
    background: var(--header-bg-dark);
  }
`;
const LogoContainer = styled.div`
  padding-left: 1rem;
  background: var(--header-bg-light);
  z-index: 3;
  @media ${device.tablet} {
    background: var(--header-bg-dark);
  }
`;
