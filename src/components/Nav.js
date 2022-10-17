import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="">
        <ul>
          <li>
            <Link to="portfolio-react/about">about</Link>
          </li>
          <li>
            <Link to="portfolio-react/portfolio">portfolio</Link>
          </li>
          <li>
            <Link to="portfolio-react/contact">contact</Link>
          </li>
          <li>
            <Link to="portfolio-react/resume">resume</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
