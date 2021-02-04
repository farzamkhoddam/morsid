import { useState, ReactNode } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import Link from "next/link";
import { device } from "../consts/theme";
import { useUserData } from "hooks/useUserData";

const NotLoginedUserMenuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/articles",
    title: "Articles",
  },
  {
    path: "/login",
    title: "Login",
  },
];
const LoginedUserMenuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/articles",
    title: "Articles",
  },
  {
    path: "/account",
    title: "My Profile",
  },
];

const ListLink = (props: {
  to: string;
  children: ReactNode;
  isActive: boolean;
}) => (
  <li
    style={{
      color: props.isActive
        ? "var(--accent-color-normal)"
        : "rgba(255, 255, 255, 0.6)",
    }}
  >
    <Link href={props.to}>{props.children}</Link>
  </li>
);
interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsActiveMenu: Function;
  isActiveMenu: boolean;
  activeItemIndex: number;
}
const Navigation: React.FC<Props> = ({
  setIsActiveMenu,
  isActiveMenu,

  activeItemIndex,
}) => {
  const { siginStatus } = useUserData();
  const [toggleMenu, setToggleMenu] = useState(isActiveMenu);
  function handleToggleClick() {
    setIsActiveMenu(!toggleMenu);
    setToggleMenu(!toggleMenu);
  }

  const MenuItems =
    siginStatus === "NOT-LOGINED"
      ? NotLoginedUserMenuItems
      : LoginedUserMenuItems;
  const listMenuItems = MenuItems.map((menuItem, index) => {
    return (
      <ListLink
        key={index}
        to={menuItem.path}
        isActive={activeItemIndex === index}
      >
        {menuItem.title}
      </ListLink>
    );
  });
  return (
    // <Container className={this.state.showMenu ? ' cross-nav' : ''}>
    <Container className={"site-navigation"}>
      <button
        onClick={handleToggleClick}
        className={"menu-trigger" + (toggleMenu ? " is-active" : "")}
      >
        <div className="icon-menu-line">
          <RiMenu3Line />
        </div>
        <div className="icon-menu-close">
          <RiCloseLine />
        </div>
      </button>

      <ul>{listMenuItems}</ul>
    </Container>
    // </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  width: max-content;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    display: inline-block;
    margin-left: 20px;
  }
  a {
    text-decoration: none;
    &:hover {
      color: var(--accent-color-normal);
    }
  }
  a[aria-current="page"] {
    color: rgba(255, 255, 255, 1);
  }
  .menu-trigger {
    display: none;
    font-size: 24px;
    background: none;
    border: none;
    color: "var(--primary-color-normal)";

    padding: 0;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    .menu-trigger,
    .icon-menu-line {
      display: flex;
    }

    .icon-menu-close {
      display: none;
    }
    .menu-trigger.is-active {
      .icon-menu-line {
        display: none;
      }
      .icon-menu-close {
        display: flex;
        padding-right: 2rem;
        padding-top: 1rem;
      }
    }
    .menu-trigger.is-active + ul {
      display: block;
    }
    ul {
      display: none;
      position: fixed;
      top: 3rem;
      right: 0;
      width: 100vw;
      height: max-content;
      overflow: hidden;
      text-align: center;
      background-color: var(--primary-color-normal);
      height: fit-content%;
    }
    ul li {
      display: block;
      margin-left: 0;
    }
    a {
      display: block;
      padding: 20px;
      text-align: left;
    }
    a:hover {
      background-color: var(--primary-color-normal);
    }
  }
`;
