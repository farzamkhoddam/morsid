import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import Link from "next/link";

const MenuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

const ListLink = (props) => (
  <li>
    <Link href={props.to}>{props.children}</Link>
  </li>
);
interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsActiveMenu: Function;
  isActiveMenu: boolean;
}
const Navigation: React.FC<Props> = ({ setIsActiveMenu, isActiveMenu }) => {
  const [toggleMenu, setToggleMenu] = useState(isActiveMenu);
  function handleToggleClick() {
    // this.setState(state => ({
    //   showMenu: !state.showMenu,
    // }))
    console.log("navid toggleMenu=", toggleMenu);
    setIsActiveMenu(!toggleMenu);
    setToggleMenu(!toggleMenu);
  }

  const listMenuItems = MenuItems.map((menuItem, index) => (
    <ListLink key={index} to={menuItem.path}>
      {menuItem.title}
    </ListLink>
  ));
  return (
    // <Container className={this.state.showMenu ? ' cross-nav' : ''}>
    <nav className={"site-navigation"}>
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
    </nav>
    // </Container>
  );
};

export default Navigation;
