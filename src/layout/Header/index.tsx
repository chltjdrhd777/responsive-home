import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import logo from "images/logo.png";
import {
  container,
  nav,
  header,
  menu,
  headerMedia,
} from "layout/Header/e.index";
import MenuIcon from "@material-ui/icons/Menu";
import NavList from "./NavList";

function Header({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <header className={`${header} ${headerMedia}`}>
        <div className="container">
          <nav className={nav}>
            <Link to="/" className="nav-brand">
              <img src={logo} alt="" className="logo" />
            </Link>

            <div className={menu}>
              <MenuIcon />
            </div>

            <NavList />
          </nav>
        </div>
      </header>

      {children}
    </>
  );
}

export default Header;
