import React from "react";
import { navUl, menuClose } from "./e.navList";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Link } from "react-router-dom";

interface NavListProps {
  menuCollpase: boolean;
  setMenuCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavList({ menuCollpase, setMenuCollapse }: NavListProps) {
  return (
    <ul className={`${navUl} centering ${menuCollpase && "active"}`}>
      <div
        className={menuClose}
        onClick={() => setMenuCollapse((prev) => !prev)}
      >
        <HighlightOffIcon />
      </div>

      <li>
        <Link to="#">Home</Link>
      </li>

      <li>
        <Link to="#">Destination</Link>
      </li>

      <li>
        <Link to="#">Pricing</Link>
      </li>

      <li>
        <Link to="#">Booking</Link>
      </li>

      <li>
        <Link to="#">About</Link>
      </li>
    </ul>
  );
}

export default NavList;
