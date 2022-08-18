import React, { useRef } from "react";

import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineCheckCircle, AiOutlineEdit } from "react-icons/ai";
import {RiDashboardLine } from "react-icons/ri";

import { BsHourglass, BsListNested } from "react-icons/bs";

import { MdOutlineCancelPresentation } from "react-icons/md";
// import {getUserDetails, removeSessions} from "../../helper/SessionHelper";
import DashNavbar from "../DashNavbar/DashNavbar";
import "./DashSidebar.css";

const DashSidebar = () => {
  let contentRef= useRef();
   let sideNavRef = useRef();

  // const onLogout=()=>{
  //     removeSessions();
  // }

  const MenuBarClickHandler = () => {
    // let sideNav = sideNavRef;
    // let content = contentRef;
    // if (sideNav.classList.contains("side-nav-open")) {
    //   sideNav.classList.add("side-nav-close");
    //   sideNav.classList.remove("side-nav-open");
    //   content.classList.add("content-expand");
    //   content.classList.remove("content");
    // } else {
    //   sideNav.classList.remove("side-nav-close");
    //   sideNav.classList.add("side-nav-open");
    //   content.classList.remove("content-expand");
    //   content.classList.add("content");
    // }
  };
  return (
    <div>
      <DashNavbar navclose={MenuBarClickHandler}></DashNavbar>

      <div
        ref={(div) => {
          sideNavRef = div;
        }}
        className="flex mt-3 "
      >
        <div className="side-nav-open w-[20%] ">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "side-bar-item-active side-bar-item mt-2"
                : "side-bar-item mt-2"
            }
            to="/"
            end
          >
            <RiDashboardLine className="side-bar-item-icon" />
            <span className="side-bar-item-caption">Dashboard</span>
          </NavLink>

          <NavLink
            className={(navData) =>
              navData.isActive
                ? "side-bar-item-active side-bar-item mt-2"
                : "side-bar-item mt-2"
            }
            to="/create"
          >
            <AiOutlineEdit className="side-bar-item-icon" />
            <span className="side-bar-item-caption">Create New</span>
          </NavLink>

          <NavLink
            className={(navData) =>
              navData.isActive
                ? "side-bar-item-active side-bar-item mt-2"
                : "side-bar-item mt-2"
            }
            to="/all"
          >
            <BsListNested className="side-bar-item-icon" />
            <span className="side-bar-item-caption">New Task</span>
          </NavLink>

          <NavLink
            className={(navData) =>
              navData.isActive
                ? "side-bar-item-active side-bar-item mt-2"
                : "side-bar-item mt-2"
            }
            to="/progress"
          >
            <BsHourglass className="side-bar-item-icon" />
            <span className="side-bar-item-caption">In Progress</span>
          </NavLink>

          <NavLink
            className={(navData) =>
              navData.isActive
                ? "side-bar-item-active side-bar-item mt-2"
                : "side-bar-item mt-2"
            }
            to="/completed"
          >
            <AiOutlineCheckCircle className="side-bar-item-icon" />
            <span className="side-bar-item-caption">Completed</span>
          </NavLink>

          <NavLink
            className={(navData) =>
              navData.isActive
                ? "side-bar-item-active side-bar-item mt-2"
                : "side-bar-item mt-2"
            }
            to="/canceled"
          >
            <MdOutlineCancelPresentation className="side-bar-item-icon" />
            <span className="side-bar-item-caption">Canceled</span>
          </NavLink>
        </div>

        <div ref={(div) => (contentRef = div)} className="content bg-slate-50">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashSidebar;
