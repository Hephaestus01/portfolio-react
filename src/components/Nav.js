import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="">
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/portfolio">portfolio</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
}
