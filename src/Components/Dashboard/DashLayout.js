import React from "react";
// import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import DashSidebar from "./DashboardSidebar/DashSidebar";
import DashNavbar from "./DashNavbar/DashNavbar";

const DashLayout = () => {

  

  return (
    <div className="  bg-slate-50">
      <DashNavbar  />

      <div className="  flex gap-2 min-h-screen  mt-3">
        <div className=" basis-1/5">
          <DashSidebar />
        </div>

        <div className="content basis-4/5 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
