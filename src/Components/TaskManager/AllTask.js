import React from "react";
import { useGetTaskSumByStatusQuery } from "../../Redux/State/UserApiRequest/ApiRequest";
import { getToken } from "../HelperTools/userToken";

const AllTask = () => {
  const token = getToken();
  const res = useGetTaskSumByStatusQuery(token);
  console.log(res.data);
  return (
    <div className=" w-[100%]">
      <div className=" grid grid-cols-3 p-3 gap-3">
        {res.data &&
          res.data.data.map((item, i) => (
            <div key={i}
              className=" bg-[#ffffff] shadow-md h-40 flex flex-col justify-center pl-10 
          rounded-lg gap-5 "
            >
              <h1 className=" font-semibold text-[20px] text-[#0052cc] tracking-widest">
                Total {item._id}
              </h1>
              <h3 className=" text-lg">{item.sum}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllTask;
