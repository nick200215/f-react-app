import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="wrapper footer-wrapper">
        <div className="footer-about">
          <h2>What are you waiting for?</h2>
          <h3>Get your copy of Techno now!</h3>
          <button>buy the techno now</button>
        </div>

        <div className="last-line">
          <p>© {new Date().getFullYear()} Dream-IT. All rights reserved.</p>

          <ul>
            <li>
              <a href="./index.html">about</a>
            </li>
            <li>
              <a href="./index.html">service</a>
            </li>
            <li>
              <a href="./index.html">support</a>
            </li>
            <li>
              <a href="./index.html">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
