import { Outlet } from "react-router-dom";
import "./main.scss";
import Sidebar from "../../components/ui/sidebar/Sidebar";
import Header from "../../components/ui/header/Header";

const Main = () => {
  return (
    <>
      <div className="main__layout">
        <Sidebar />
        <div className="main__left">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Main;
