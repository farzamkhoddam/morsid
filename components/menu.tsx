import styled from "styled-components";
import Navigation from "../components/navigation";
import { useState } from "react";
import { MenuColorType } from "./simplePageHeader";
import Image from "next/image";
interface Props {
  className?: string;
  colorType?: MenuColorType;
}
const Menu: React.FC<Props> = ({ className, colorType }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <MenuContainer className={className} colorType={colorType}>
      <Contents>
        <LogoContainer>
          <Image src="/logo-accent.svg" alt="Logo" width={150} height={60} />
        </LogoContainer>
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
      </Contents>
    </MenuContainer>
  );
};
export default Menu;

const MenuContainer = styled.header<{ colorType?: MenuColorType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--header-height-desktop);
  background: var(--primary-color-normal);
  width: 100%;
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 1rem;
`;

const DeactiveMenuNavContainer = styled.div<{ colorType?: MenuColorType }>`
  height: 4rem;
  background:background: var(--primary-color-normal);
  
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  z-index: 2;

`;
const ActiveMenuNavContainer = styled.div`
  height: 4rem;
  background: var(--primary-color-normal);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
`;
const LogoContainer = styled.div`
  width: 100px;
`;
