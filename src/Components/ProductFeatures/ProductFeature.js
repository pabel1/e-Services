import React from 'react'

import { SiHackthebox } from "react-icons/si";
import productlPhnImg from "../../Assests/images/Central phone 2.png";

const ProductFeature = () => {
  return (
    <div className="pt-[250px] border-t border-[#ddd] grid items-center justify-center">
      <div className="top-text">
        <p className="text-lg mt-5 text-[#0052CC] text-center font-bold">
          Products Features
        </p>
        <h1 className="font-bold text-center text-4xl mt-5">
          Make more out of your data
        </h1>
        <div className="features-group flex items-center justify-center mt-5">
          <div>
            <div className="w-[230px] text-right mt-7">
              <button className="p-2 text-3xl   text-[#0052CC] rounded-lg shadow-[0px_8px_12px_-3px_#989898]">
                <SiHackthebox></SiHackthebox>
              </button>
              <h1 className="font-bold text-base tracking-wider mt-2 mb-3">
                Real-time analytics
              </h1>
              <p className="text-xs">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>
            <div className="w-[230px] text-right mt-7">
              <button className="p-2 text-3xl   text-[#0052CC] rounded-lg shadow-[0px_8px_12px_-3px_#989898]">
                <SiHackthebox></SiHackthebox>
              </button>
              <h1 className="font-bold text-base tracking-wider mt-2 mb-3">
                Intuitive dashboard
              </h1>
              <p className="text-xs">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>
            <div className="w-[230px] text-right mt-7">
              <button className="p-2 text-3xl   text-[#0052CC] rounded-lg shadow-[0px_8px_12px_-3px_#989898]">
                <SiHackthebox></SiHackthebox>
              </button>
              <h1 className="font-bold text-base tracking-wider mt-2 mb-3">
                Smart suggestions
              </h1>
              <p className="text-xs">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>
          </div>
          <div className="w-[300px] mx-11">
            <img src={productlPhnImg} alt="" />
          </div>
          <div>
          <div className="w-[230px] mt-7">
              <button
                className="p-2 text-3xl text-[#0052CC] rounded-lg shadow-[0px_8px_12px_-3px_#989898]"
                
              >
                <SiHackthebox></SiHackthebox>
              </button>
              <h1 className="font-bold text-base tracking-wider mt-2 mb-3">
                Real-time analytics
              </h1>
              <p className="text-xs">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>

            <div className="w-[230px] mt-7">
              <button
                className="p-2 text-3xl text-[#0052CC] rounded-lg shadow-[0px_8px_12px_-3px_#989898]"
                
              >
                <SiHackthebox></SiHackthebox>
              </button>
              <h1 className="font-bold text-base tracking-wider mt-2 mb-3">
                Real-time analytics
              </h1>
              <p className="text-xs">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>

            <div className="w-[230px] mt-7">
              <button
                className="p-2 text-3xl text-[#0052CC] rounded-lg shadow-[0px_8px_12px_-3px_#989898]"
                
              >
                <SiHackthebox></SiHackthebox>
              </button>
              <h1 className="font-bold text-base tracking-wider mt-2 mb-3">
                Real-time analytics
              </h1>
              <p className="text-xs">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFeature;