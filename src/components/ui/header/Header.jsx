import React from "react";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrap container">
        <div>
          <h2>Logo</h2>
        </div>
        <div className="header__buttons">
          <button className="header__hamburger">
            <i class="fa-solid fa-bars"></i>
          </button>
          <Link to={"/"}>
            <button className="header__out">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
