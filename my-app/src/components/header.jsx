import React from "react";
import logoImage from "./../assets/img/1.png";

const Header = () => {
  return (
    <header>
      <div className="wrapper header-wrapp">
        <figure>
          <a href="./index.html">
            <img className="logo" src={logoImage} alt="" />
          </a>
        </figure>
        <div className="nav-button">
          <nav>
            <ul>
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./index.html">Demo</a>
              </li>
              <li>
                <a href="./index.html">Inner Pages</a>
              </li>
              <li>
                <a href="./index.html">Support</a>
              </li>
              <li>
                <a href="./index.html">Feature</a>
              </li>
              <li>
                <a href="./index.html">Blog</a>
              </li>
            </ul>
          </nav>
          <button>
            <a href="./index.html">Get Started</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
