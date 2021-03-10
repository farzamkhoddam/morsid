import styled from "styled-components";
import Navigation from "../components/navigation";
import { useState } from "react";
import { Viewer_viewer as User } from "wpapi";
import Image from "next/image";
import Link from "next/link";
interface Props {
  className?: string;
  activeItemIndex: number;
  user: User;
}
const Menu: React.FC<Props> = ({ className, activeItemIndex, user }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <MenuContainer className={className}>
      <Contents>
        <Link href="/">
          <LogoContainer>
            <Image src="/logo-accent.svg" alt="Logo" width={150} height={60} />
          </LogoContainer>
        </Link>
        {!isActiveMenu ? (
          <DeactiveMenuNavContainer>
            <Navigation
              activeItemIndex={activeItemIndex}
              setIsActiveMenu={setIsActiveMenu}
              isActiveMenu={isActiveMenu}
              user={user}
            />
          </DeactiveMenuNavContainer>
        ) : (
          <ActiveMenuNavContainer>
            <Navigation
              activeItemIndex={activeItemIndex}
              setIsActiveMenu={setIsActiveMenu}
              isActiveMenu={isActiveMenu}
              user={user}
            />
          </ActiveMenuNavContainer>
        )}
      </Contents>
    </MenuContainer>
  );
};
export default Menu;

const MenuContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--header-height-desktop);
  background: var(--primary-color-normal);
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 90;
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 2rem;
`;

const DeactiveMenuNavContainer = styled.div`
  height: 4rem;
  background:background: var(--primary-color-normal);
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  cursor: pointer;
`;
