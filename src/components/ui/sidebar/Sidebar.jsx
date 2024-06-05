import { NavLink } from "react-router-dom";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar" sty>
      <NavLink to={"/main"} className="NavLink">
        Cars
      </NavLink>
      <NavLink to={"/main/brand"} className="NavLink">
        Users
      </NavLink>
      <NavLink to={"/main/album"} className="NavLink">
        Album
      </NavLink>
    </div>
  );
};

export default Sidebar;
