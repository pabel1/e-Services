import React from "react";
import "./Banner.css";
import TabPhnImg from "../../Assests/images/tablet 1.png";

const Banner = () => {
  return (
    <div className="banner__bg">
      <div className=" h-[500px] mb-[400px] pt-10">
        <div className="mx-auto grid w-3/5 ">
          <h1 className="text-5xl mt-20 my-4 tracking-wider leading-[60px] text-center font-bold">
            Analytics that transform your product inside-out
          </h1>
          <div className="mx-auto mt-5 pb-8">
            <button
              className=" py-3 px-8 border-none bg-[#0052cc] text-[#fff]
             rounded-lg mr-4 font-semibold hover:shadow-[1px_1px_10px_1px_#0052cc]"
            >
              Request for Demo
            </button>
            <button
              className="py-3 px-8 border-[1.5px] border-[#0052cc] 
           text-[#0052cc] font-semibold shadow-[1px_1px_1px_1px_#0052cc] rounded-lg
            hover:shadow-[3px_2px_3px_0px_#0052cc] "
              to="/registration"
            >
              Request for Demo
            </button>
          </div>
          <div className=" mt-5">
            <img src={TabPhnImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
