import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../Assests/images/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar__bg ">
      <div className=" border-b border-[#0052cce9] px-12  flex items-center justify-between">
        <Link to="/">
          <img className=" w-1/5" src={LogoImg} alt="" />
        </Link>
        <nav className=" mr-8">
          <NavLink
            className=" py-3 px-8 border-none bg-[#0052cc] text-[#fff]
             rounded-lg mr-4 font-semibold hover:shadow-[1px_1px_10px_1px_#0052cc]"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink className="py-3 px-8 border-[1.5px] border-[#0052cc] 
           text-[#0052cc] font-semibold shadow-[1px_1px_1px_1px_#0052cc] rounded-lg
            hover:shadow-[3px_2px_3px_0px_#0052cc] " to="/registration">
            Registration
          </NavLink>
        </nav>
      </div>
    </div>
  );
};


export default Navbar;
