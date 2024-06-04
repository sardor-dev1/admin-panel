import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  let navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="sidebar">
      <h2>LOGO</h2>
      <NavLink to={"/main"} className="NavLink">
        Cars
      </NavLink>
      <NavLink to={"/main/brand"} className="NavLink">
        Users
      </NavLink>
      <NavLink to={"/main/album"} className="NavLink">
        Album
      </NavLink>
      <button className="btn btn-success" onClick={() => navigate(-1)}>
        Log out
      </button>
    </div>
  );
};

export default Sidebar;
