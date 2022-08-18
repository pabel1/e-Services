import React from 'react'
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const NewTask = () => {
  return (
    <div>
    <div className=" flex items-center justify-between p-3">
      <div className=" ">
        <h1 className=" font-semibold text-[20px] text-[#0052cc] tracking-widest">
          Task Completed
        </h1>
      </div>
      <div className=" flex items-center justify-center ">
        <div className="">
          <input className="py-2 px-5 border-2 w-[80%] rounded-md focus:outline-none mt-4" />
        </div>
        <div className="">
          <button
            className=" py-2 px-3  mt-3 bg-[#0052cc] text-white 
       font-normal rounded-lg tracking-wider hover:bg-[#0a397e]"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div className=" grid grid-cols-3 p-3">
          <div
            className=" bg-[#ffffff] shadow-md h-40 flex flex-col justify-center pl-10 
       rounded-lg gap-5 "
          >
            <h1 className=" font-semibold text-[20px] text-[#0052cc] tracking-widest">
              title
            </h1>
            <h3 className=" font-normal text-[16px] tracking-wide">
              description
            </h3>
            <div className=" flex items-center justify-around mt-4">
              <button>
                <BiEditAlt />
              </button>
              <button>
                <AiFillDelete />
              </button>
              <button
                className=" px-3   bg-[#0052cc] text-white 
       font-normal rounded-lg tracking-wider hover:bg-[#0a397e]"
              >
                Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewTask