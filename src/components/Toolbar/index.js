import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import HamgurgerMenu from "../HamburgerMenu";

const Toolbar = (props) => (
  <header className={css.Toolbar}>
    <HamgurgerMenu toggleSideBar={props.toggleSideBar} />
    <Logo />
    <nav className={css.HideOnMobile}>
      <Menu />
    </nav>
  </header>
);

export default Toolbar;
