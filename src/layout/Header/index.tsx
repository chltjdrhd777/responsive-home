import React, { PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";
import logo from "images/logo.png";
import { nav, header, menu, headerMedia } from "layout/Header/e.index";
import MenuIcon from "@material-ui/icons/Menu";
import NavList from "./NavList";

function Header({ children }: PropsWithChildren<{}>) {
  const [menuCollpase, setMenuCollapse] = useState(false);

  const menuControl = {
    menuCollpase,
    setMenuCollapse,
  };

  return (
    <>
      <header className={`${header} ${headerMedia}`}>
        <div className="container">
          <nav className={nav}>
            <Link to="/" className="nav-brand">
              <img src={logo} alt="" className="logo" />
            </Link>

            <div
              className={menu}
              onClick={() => {
                setMenuCollapse((prev) => !prev);
              }}
            >
              <MenuIcon />
            </div>

            <NavList {...menuControl} />
          </nav>
        </div>
      </header>

      {children}
    </>
  );
}

export default Header;
