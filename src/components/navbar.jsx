import { CommandBar } from "@fluentui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ totalCounters }) => {
  return (
    <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center text-dark text-decoration-none"
      >
        <span className="fs-4">Navbar</span>
        <span className="badge rounded-pill text-bg-secondary mx-2">
          {totalCounters}
        </span>
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/counter">
            Counter
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
