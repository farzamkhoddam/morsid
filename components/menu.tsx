import styled from "styled-components";
import Navigation from "../components/navigation";
import { device } from "../consts/theme";
import { useState } from "react";
interface Props {
  className?: string;
}
const Menu: React.FC<Props> = ({ className }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <MenuContainer className={className}>
      {!isActiveMenu ? (
        <DeactiveMenuNavContainer>
          <Navigation
            setIsActiveMenu={setIsActiveMenu}
            isActiveMenu={isActiveMenu}
          />
        </DeactiveMenuNavContainer>
      ) : (
        <ActiveMenuNavContainer>
          <Navigation
            setIsActiveMenu={setIsActiveMenu}
            isActiveMenu={isActiveMenu}
          />
        </ActiveMenuNavContainer>
      )}
    </MenuContainer>
  );
};
export default Menu;

const MenuContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height-desktop);
  background: black;
  @media ${device.tablet} {
    width: 100%;
  }
`;

const DeactiveMenuNavContainer = styled.div`
  height: 4rem;
  background: black !important;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  z-index: 2;
`;
const ActiveMenuNavContainer = styled.div`
  height: 4rem;
  background: var(--secondary-color-dark);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
`;
