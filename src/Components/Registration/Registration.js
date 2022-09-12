import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import "./Registration.css";
import illus from "../../Assests/images/My project-1 (1).png";


import {
  IsEmpty,
  IsNotEmail,
  ErrorToast,
  // getBase64,
  SuccessToast,
} from "../HelperTools/RegivalidationTools";
import { useCreateUserMutation } from "../../Redux/State/UserApiRequest/ApiRequest";
import { useDispatch } from "react-redux";
import { showLoader } from "../../Redux/State/SettingSlice";
const Registration = () => {
  const [newData, setNewData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  // const [lastname, setLastName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  const [createUser, resInfo] = useCreateUserMutation();

  const navigate = useNavigate();
  const dispatch= useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (newData.firstname.length === 0) {
      ErrorToast("FirstName Required!");
    }

    else if (newData.lastname.length === 0) {
      ErrorToast("LastName Required!");
    }
    else if (IsNotEmail(newData.email)) {
      ErrorToast("Valid  Email Required!");
    }
    else if (IsEmpty(newData.password)) {
      ErrorToast("Password  Required!");
    } else if (
      newData.firstname &&
      newData.lastname &&
      newData.email &&
      newData.password
    ) {
      const res = await createUser(newData);
      if(resInfo.isLoading){
        dispatch(showLoader());
      }
      console.log(res);
      if (res.data) {
        SuccessToast("Registration Success!");
        
        navigate("/login");
      } else if (!res.data) {
        document.getElementById("formId").reset();
        ErrorToast("Email Already Exist!");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="registration__bg flex items-center justify-center gap-14">
        <div className="w-[30%] bg-transparent">
          <img className="  text-transparent" src={illus} alt="" />
        </div>
        <form
          className=" bg-transparent p-12 my-24 rounded-lg w-[50%]  items-center justify-center"
          onSubmit={handleSubmit}
          id="formId"
        >
          <h1 className="text-3xl text-left font-bold text-[#0052cc]">
            Create Account
          </h1>
          <p className="text-sm text-left my-5">
            Fill in the details below to create an account
          </p>
          <div className="my-5 w-[100%]">
            <input
              className=" py-3 px-5 border-none w-full rounded-md  focus:outline-none mt-4"
              type="text"
              name="firstName"
              id=""
              placeholder="Enter Your First Name"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  firstname: e.target.value,
                })
              }
            />
            <input
              className=" py-3 px-5 border-none w-full rounded-md focus:outline-none mt-4"
              type="text"
              name="lastName"
              id=""
              placeholder="Enter Your Last Name"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  lastname: e.target.value,
                })
              }
            />

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
          <button
            // type="submit"
            className="singin__btn my-5 w-[100%] px-5 py-3 rounded text-md text-white hover:bg-[#0052cccc] bg-[#0052cc] cursor-pointer"
            value="Create Account"
          >
            Create Account
          </button>
          <p className="text-center my-8">
            Already have an account?{" "}
            <Link className="text-[#0052cc] cursor-pointer" to="/login">
              Sign in
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
