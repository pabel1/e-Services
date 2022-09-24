import React from "react";
import { AiOutlineLogout, AiOutlineMenuUnfold, AiOutlineUser} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import mypro from "../../../Assests/images/My pro.jpg"
import './DashNavbar.css'
const DashNavbar = ({navclose}) => {
  return (
    <div className="  bg-white sticky z-50 top-0 ">
      <div className=" p-5  shadow-md
       flex items-center justify-between ">
          <div className=" flex items-center mx-10 text-[20px]">
            <button  className="icon-nav m-0" onClick={navclose}>
              <AiOutlineMenuUnfold />
            </button>
            <h1 className=" mx-4 text-[#0052cc] font-semibold  " > Task Manager </h1>.
          </div>

          <div className=" mr-10">
         
            <div className="user-dropdown ">
            <img
                className="icon-nav-img icon-nav ring-2 ring-slate-100"
                src={mypro}
                alt=""
              />
              <div className="user-dropdown-content ">
                <div className="mt-4 text-center px-5">
                  <img
                    className="icon-nav-img ring-2 ring-slate-100"
                    src={mypro}
                    alt=""
                  />
                  <h6>{}</h6>
                  <hr className="user-dropdown-divider  p-0" />
                </div>
                <NavLink to="/Profile" className="side-bar-item d-flex items-center">
                  <AiOutlineUser className="side-bar-item-icon" />
                  <span className="side-bar-item-caption">Profile</span>
                </NavLink>
                <a href="/" className="side-bar-item">
                  <AiOutlineLogout className="side-bar-item-icon" />
                  <span className="side-bar-item-caption">Logout</span>
                </a>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default DashNavbar;
