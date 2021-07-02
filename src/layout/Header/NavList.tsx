import React from "react";
import { navUl, menuClose } from "./e.navList";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className={navUl}>
      <div className={menuClose}>
        <HighlightOffIcon />
      </div>

      <li className="nav-item">
        <Link to="#">Home</Link>
      </li>

      <li className="nav-item">
        <Link to="#">Destination</Link>
      </li>

      <li className="nav-item">
        <Link to="#">Pricing</Link>
      </li>

      <li className="nav-item">
        <Link to="#">Booking</Link>
      </li>

      <li className="nav-item">
        <Link to="#">About</Link>
      </li>
    </ul>
  );
}

export default NavList;
