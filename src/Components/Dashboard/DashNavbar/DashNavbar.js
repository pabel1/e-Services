import React, { useEffect, useState } from "react";
import { AiOutlineLogout, AiOutlineMenuUnfold, AiOutlineUser} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUserInfo, setUserInfo } from "../../../Redux/State/userSlice";

import { getUserData, removeToken, removeUserData } from "../../HelperTools/userToken";
import './DashNavbar.css'
const DashNavbar = ({navclose}) => {

  const dispatch=useDispatch()
  const [userData,setUserData]=useState([]) 
  
 

  useEffect(() => {
    setUserData(getUserData())
    dispatch(setUserInfo(getUserData()))
  }, [dispatch])

  
  
 
  

  // const token= getToken();
  const navigate= useNavigate()
  const logOutHandler=()=>{

    dispatch(removeUserInfo([]));
    removeToken("token");
    removeUserData("userData")
    navigate('/login')
    

  }

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
                className="icon-nav-img icon-nav ring-2 ring-blue-100 w-10"
                src={userData.photo}
                alt=""
              />
              <div className="user-dropdown-content ">
                <div className="mt-4 text-center px-5">
                  <img
                    className="icon-nav-img ring-4 ring-slate-100 w-10"
                    src={userData.photo}
                    alt=""
                  />
                  <h6 className=" text-left my-2 font-semibold text-[#0052cc]">{userData.firstname } {userData.lastname}</h6>
                  <hr className="user-dropdown-divider  p-0" />
                </div>
                <NavLink to="updateprofile" className="side-bar-item d-flex items-center">
                  <AiOutlineUser className="side-bar-item-icon" />
                  <span className="side-bar-item-caption">Profile</span>
                </NavLink>
                <button  className="side-bar-item" onClick={logOutHandler}>
                  <AiOutlineLogout className="side-bar-item-icon" />
                  <span className="side-bar-item-caption">Logout</span>
                </button>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default DashNavbar;
