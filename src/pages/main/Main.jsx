import { Outlet } from "react-router-dom";
import "./main.scss";
import Sidebar from "../../components/ui/sidebar/Sidebar";

const Main = () => {
  return (
    <>
      <div className="main__layout">
        <Sidebar />
        <div className="main__left">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Main;
