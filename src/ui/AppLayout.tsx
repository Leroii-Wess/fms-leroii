import { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AppLayout: FC = () => {
  return (
    <div className="grid grid-cols-[30rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Sidebar />
      <Header />
      <div className="px-16 py-10 overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
