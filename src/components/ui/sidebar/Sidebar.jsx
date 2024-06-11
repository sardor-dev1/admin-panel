import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <NavLink
        to="/main"
        className={`NavLink ${location.pathname === "/main" ? "active" : ""}`}
      >
        Cars
      </NavLink>
      <NavLink
        to="/main/brand"
        className={`NavLink ${
          location.pathname === "/main/brand" ? "active" : ""
        }`}
      >
        Users
      </NavLink>
      <NavLink
        to="/main/album"
        className={`NavLink ${
          location.pathname === "/main/album" ? "active" : ""
        }`}
      >
        Album
      </NavLink>
    </div>
  );
};

export default Sidebar;
