import React, { useState } from "react";
import { useForgetPasswordMutation } from "../../Redux/State/UserApiRequest/ApiRequest";
import {useNavigate} from 'react-router-dom'
import {
  ErrorToast,
  IsNotEmail,
  SuccessToast,
} from "../HelperTools/RegivalidationTools";
import {  setEmail } from "../HelperTools/userToken";

import { useDispatch } from "react-redux";
import { showLoader,hideLoader } from "../../Redux/State/SettingSlice";

const SendOtp = () => {
  const navigate= useNavigate()
  const dispatch=useDispatch()
  const [forgetPassword, resInfo] = useForgetPasswordMutation();

  const [newData, setNewData] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (IsNotEmail(newData.email)) {
        ErrorToast("Enter Valid Email First!");
      } else {
        dispatch(showLoader())
        const res = await forgetPassword(newData);
        console.log(resInfo)
        // if(!resInfo.isSuccess && resInfo.isLoading){
        //   dispatch(showLoader());
        // }

        dispatch(hideLoader())
        if (res.data) {
   
          setEmail(newData.email)
          SuccessToast(res.data.message);
          navigate("/otpverification")
         
        } else if (res.error.data) {
          ErrorToast(res.error.data.message);
        }
      }
    } catch (error) {
      ErrorToast("Something Went Wrong!");
    }
  };
  return (
    

    <div className="  ">
     
      <div className=" flex items-center justify-center gap-14 mt-10">
        <form
          className=" bg-transparent p-8 mt-8 rounded-lg w-[50%] 
         items-center justify-center shadow-lg"
          id="formId"
          onSubmit={handleSubmit}
        >
          <p className="text-sm text-left my-2 font-semibold">
            Please Enter your Email
          </p>
          <div className="my-3 w-[100%]">
            <input
              className=" py-3 px-5 border-2 w-full rounded-md outline-blue-700 mt-4"
              type="text"
              name="email"
              // required
              placeholder="Enter Your Email"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  email: e.target.value,
                })
              }
            />
          </div>
          <input
            type="submit"
            className="singin__btn my-2 w-[20%] px-5 py-3 rounded text-md text-white hover:bg-[#0052cccc] bg-[#0052cc] cursor-pointer"
            value="Next"
          />
        </form>
      </div>
    </div>
  );
};

export default SendOtp;
