import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import login_illus from "../../Assests/images/login.png";
import {
  IsEmpty,
  IsNotEmail,
  ErrorToast,
  // getBase64,
  SuccessToast,
} from "../HelperTools/RegivalidationTools";
import { useLoginUserMutation } from "../../Redux/State/UserApiRequest/ApiRequest";
import { getToken, storeToken } from "../HelperTools/userToken";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../Redux/State/authSlice";

const Login = () => {
  const [loginUser] = useLoginUserMutation();
  
  const navigate = useNavigate();

  const [newData, setNewData] = useState({
    email: "",
    password: "",
  });
  const loginSubmit = async (e) => {
    e.preventDefault();

    if (IsEmpty(newData.password)) {
      ErrorToast("Password Required!");
    } else if (IsNotEmail(newData.email)) {
      ErrorToast("Valid Email Required!");
    } else if (newData.password && newData.email) {
      const res = await loginUser(newData);
      if (res.data) {
        SuccessToast("LoginSuccess!");
        storeToken(res.data.access_token)
        navigate("/dashboard");
      }
      else if(!res.data){
        document.getElementById("formId").reset();
        ErrorToast("Login Failed!  Enter  Correct  Email or Password")
      }
    }
  };

  // token set in redux store 
  const dispatch= useDispatch();
  const token = getToken('token');
  useEffect(() => {
    dispatch(setUserToken({token:token}))
    
  }, [dispatch,token])
  

  return (
    <>
      <Navbar />
      <div className="registration__bg flex items-center justify-center gap-14">
        <div className="w-[30%] bg-transparent">
          <img className="  text-transparent" src={login_illus} alt="" />
        </div>
        <form
          className=" bg-transparent p-12 my-24 rounded-lg w-[50%] 
         items-center justify-center"
         id="formId"
          onSubmit={loginSubmit}
        >
          <h1 className="text-3xl text-left font-bold text-[#0052cc]">
            Welcome Back!
          </h1>
          <p className="text-sm text-left my-5">Please login to your account</p>
          <div className="my-5 w-[100%]">
            <input
              className=" py-3 px-5 border-none w-full rounded-md focus:outline-none mt-4"
              type="text"
              name="email"
              placeholder="Enter Your Email"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  email: e.target.value,
                })
              }
            />

            <input
              className=" py-3 px-5 border-none w-full rounded-md focus:outline-none mt-4"
              type="password"
              name="password"
              id=""
              placeholder="Password"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  password: e.target.value,
                })
              }
            />
          </div>
          <input
            type="submit"
            className="singin__btn my-5 w-[100%] px-5 py-3 rounded text-md text-white hover:bg-[#0052cccc] bg-[#0052cc] cursor-pointer"
            value="Sign in"
          />
          <p className="text-center my-8">
            Don't have any account?{" "}
            <Link className="text-[#0052cc] cursor-pointer" to="/registration">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
