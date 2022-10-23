import React from "react";
import { useGetTaskSumByStatusQuery } from "../../Redux/State/UserApiRequest/ApiRequest";
import { getToken } from "../HelperTools/userToken";
import {motion} from 'framer-motion';
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../Redux/State/SettingSlice";

const AllTask = () => {
  const token = getToken();
  const dispatch =useDispatch()
  dispatch(showLoader())
  const res = useGetTaskSumByStatusQuery(token);
  dispatch(hideLoader())
  
  // useEffect(() => {
  //   res.refetch();
   
  // },[])
  
  // console.log(res.data);
  return (
    <div className=" w-[100%]"
    

    >
      <div className="  grid grid-cols-3 p-3 gap-3">
        {res.data &&
          res.data.data.map((item, i) => (
            <motion.div key={i}
              className=" bg-[rgb(255,255,255)] shadow-md h-40 flex flex-col justify-center pl-10 
          rounded-lg gap-5 py-3"
          initial={{y:25}}
          animate={{y:0,duration: 5,type:"spring"}}
            >
              <h1 className=" font-semibold text-[20px] text-[#0052cc] tracking-widest">
                Total {item._id}
              </h1>
              <h3 className=" text-lg">{item.sum}</h3>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default AllTask;
