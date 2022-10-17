import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function () {
  return (
    <header>
      <Link to="/portfolio-react/">
        <h1>matt hlavaty</h1>
      </Link>
      <Nav />
    </header>
  );
}
