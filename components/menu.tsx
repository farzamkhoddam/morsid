import styled from "styled-components";
import Navigation from "../components/navigation";
import { device } from "../consts/theme";
import { useState } from "react";
import { MenuColorType } from "./simplePageHeader";
interface Props {
  className?: string;
  colorType?: MenuColorType;
}
const Menu: React.FC<Props> = ({ className, colorType }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <MenuContainer className={className} colorType={colorType}>
      {!isActiveMenu ? (
        <DeactiveMenuNavContainer colorType={colorType}>
          <Navigation
            colorType={colorType}
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

const MenuContainer = styled.header<{ colorType: MenuColorType }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height-desktop);
  background: ${(props) => (props.colorType === "light" ? "white " : "black ")};
  @media ${device.tablet} {
    width: 100%;
  }
`;

const DeactiveMenuNavContainer = styled.div<{ colorType: MenuColorType }>`
  height: 4rem;
  background: ${(props) =>
    props.colorType === "light" ? "white !important" : "black !important"};
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
