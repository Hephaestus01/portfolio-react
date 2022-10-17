import React from "react";
import { Link } from "react-router-dom";

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
          <li>
            <Link to="/resume">resume</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
