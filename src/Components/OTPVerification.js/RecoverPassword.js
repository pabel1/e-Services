import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoader, showLoader } from "../../Redux/State/SettingSlice";
import { useRecoverPasswordMutation } from "../../Redux/State/UserApiRequest/ApiRequest";
import { ErrorToast, SuccessToast } from "../HelperTools/RegivalidationTools";
import { getEmail, removeEmail } from "../HelperTools/userToken";

const RecoverPassword = () => {
  const dispatch = useDispatch()
    const navigate=useNavigate()
  const [email, setEmail] = useState();

  const [recoverPassword] = useRecoverPasswordMutation();
  const [newData, setNewData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setEmail(getEmail());
  }, []);

  const handleSubmit = async () => {
    const { newPassword, confirmPassword } = newData;
    try {
      if (newPassword.length === 0) {
        ErrorToast("Password Are required!");
      } else if (confirmPassword.length === 0) {
        ErrorToast("confirmPassword Are required!");
      } else {
        if (newPassword === confirmPassword) {
          dispatch(showLoader())
          const res = await recoverPassword({ email, newPassword });
          dispatch(hideLoader())
          if (res.data) {
            SuccessToast(res.data.message);
            removeEmail("email")
            navigate("/login")
          } else if (!res.data) {
            ErrorToast(" Password Update Failed!");
          }
        } else {
          ErrorToast("Please enter Same Password!");
        }
      }
    } catch (error) {
      ErrorToast("Something Went Wrong!");
    }
  };

  return (
    <div className="  ">
      <div className="bg-white shadow-lg w-2/4 mx-auto  py-5 flex flex-col items-center  gap-5 mt-[5%]">
        <p className="text-sm text-left  font-semibold">
          Recover Your Password
        </p>

        <div className="w-[70%]  flex flex-col  justify-between gap-3 mt-5">
          <div className="w-full flex flex-col gap-2 basis-1/2 ">
            <label className=" text-base font-semibold">Email </label>
            <input
              readOnly={true}
              placeholder="User Email"
              className=" p-2 rounded-md border  outline-1 outline-blue-700 text-base bg-gray-200"
              type="email"
              defaultValue={email}
            />
          </div>
          <div className="w-full flex flex-col gap-2 basis-1/2 mt-3">
            <label className=" text-base font-semibold">New Password </label>
            <input
              placeholder="New Password"
              className=" p-2 rounded-md border  outline-1 outline-blue-700 text-base"
              type="password"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  newPassword: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full flex flex-col gap-2 basis-1/2 mt-3">
            <label className=" text-base font-semibold">
              Confirm Password{" "}
            </label>
            <input
              placeholder="Confirm Password"
              className=" p-2 rounded-md border  outline-1 outline-blue-700 text-base"
              type="password"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
        </div>

        <button
          className="singin__btn my-2 w-[20%] px-5 py-3 rounded text-md text-white
         hover:bg-[#0052cccc] bg-[#0052cc] cursor-pointer"
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecoverPassword;
