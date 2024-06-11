import { Outlet } from "react-router-dom";
import "./main.scss";
import Sidebar from "../../../components/ui/sidebar/Sidebar";
import Header from "../../../components/ui/header/Header";
const Main = () => {
  return (
    <>
      <div className="main__layout">
        <Header />
        <div className="main__left">
          <Sidebar />
          <main className="main__left__body">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Main;