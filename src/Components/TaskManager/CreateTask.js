import React from "react";

const CreateTask = () => {
  return (
    <div>
      <div className=" bg-[#ffffff] w-[60%]  shadow-xl mx-auto rounded-md text-center">
        <h1 className="text-[#0052cc] text-[20px] font-semibold text-center p-2 ">
          Create New
        </h1>
        <br />
        <input
          className="py-3 px-5 border-2 w-[80%] rounded-md focus:outline-none mt-4"
          type="text"
          placeholder="Task Name"
        />
        <br />
        <textarea
          className="py-3 px-5 border-2 w-[80%] rounded-md focus:outline-none mt-4"
          name="task"
          id=""
          rows="5"
          placeholder="Task Description"
        ></textarea>
        <br />
        <button className=" ml-[65%] p-3 px-8 mb-5 mt-3 bg-[#0052cc] text-white 
         font-normal rounded-lg tracking-wider hover:bg-[#0a397e]">Create</button>
      </div>
    </div>
  );
};

export default CreateTask;
