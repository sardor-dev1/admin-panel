import { NavLink } from "react-router-dom"
import "./sidebar.scss"
const Sidebar = () => {
  return (
    <div className="sidebar">
        <h2>LOGO</h2>
        <NavLink to={"/main"} className="NavLink">
            Cars
        </NavLink>
        <NavLink to={"/main/brand"} className="NavLink">
            Brands
        </NavLink>
    </div>
  )
}

export default Sidebar