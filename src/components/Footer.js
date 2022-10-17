import React, { useState } from "react";
import githubLogo from '../assets/images/github-logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>made by Matt Hlavaty</h3>
      </div>
      <div className="footer-icons">
        <a href="https://github.com/Hephaestus01">
          <img
            src={githubLogo}
            alt="github link"
          />
        </a>
      </div>
      <div></div>
    </footer>
  );
}
