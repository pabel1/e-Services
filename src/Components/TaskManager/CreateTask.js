import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useCreateTaskMutation,

} from "../../Redux/State/UserApiRequest/ApiRequest";
import FullScreenLoader from "../FullScreenPrgress/FullScreenLoader";
import {
  ErrorToast,
  IsEmpty,
  SuccessToast,
} from "../HelperTools/RegivalidationTools";
import { getToken } from "../HelperTools/userToken";

const CreateTask = () => {
  const navigate = useNavigate();
  const [createTask] = useCreateTaskMutation();
  const token = getToken();
  
  // console.log(token);
  // const {token}=useSelector(state=>state.auth)

  const [newData, setNewData] = useState({
    title: "",
    description: "",
    status: "new",
  });

  const handleSubmit = async () => {

    try {
      if (IsEmpty(newData.title)) {
        ErrorToast("Task Name Required!");
      } else if (IsEmpty(newData.description)) {
        ErrorToast("Task Description Required!");
      } else if (newData.title && newData.description) {
        const res = await createTask({ newData, token });
        if(res.isLoading){
          <FullScreenLoader/>
        }
        if (res.data) {
          SuccessToast("Task Created Success!");
          navigate("/dashboard");
         
        } else if (!res.data) {
          ErrorToast("Something Wrong!");
        }
        
      }
    } catch (error) {

        ErrorToast("Something Wrong!")
    }
  };
  return (
    <div>
      <div className=" bg-[#ffffff] w-[60%]  shadow-xl mx-auto rounded-md text-center">
        <h1 className="text-[#0052cc] text-[20px] font-semibold text-center p-2 ">
          Create New
        </h1>
        <br />
        <input
          className="py-3 px-5 border-2 w-[80%] rounded-md focus:outline-orange-600 mt-4"
          type="text"
          placeholder="Task Name"
          onChange={(e) =>
            setNewData({
              ...newData,
              title: e.target.value,
            })
          }
        />
        <br />
        <textarea
          className="py-3 px-5 border-2 w-[80%] rounded-md  mt-4"
          name="task"
          id=""
          rows="5"
          placeholder="Task Description"
          onChange={(e) =>
            setNewData({
              ...newData,
              description: e.target.value,
            })
          }
        ></textarea>
        <br />
        <button
          className=" ml-[65%] p-3 px-8 mb-5 mt-3 bg-[#0052cc] text-white 
         font-normal rounded-lg tracking-wider hover:bg-[#0a397e]"
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
