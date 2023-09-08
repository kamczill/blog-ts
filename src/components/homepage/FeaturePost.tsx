import React from "react";
import img from "./../../assets/state-view.png";
import avatar from "./../../assets/Avatar.png";
import {RiCheckFill} from 'react-icons/ri'

const FeaturePost = ({onImageLoad}) => {
  return (
    <div className="flex flex-col gap-2 p-5 mx-6 my-10 shadow-md max-w-[1100px] rounded-md bg-white lg:flex-row lg:p-0 lg:mt-[7rem] feature-post">
      <div className="hidden lg:flex lg:w-1/2 lg:h-full lg:object-contain">
        <img src={img} className="w-full rounded-bl-lg rounded-tl-lg" onLoad={onImageLoad} />
      </div>
      <div className="bg-white rounded-md shadow-r-md flex flex-col justify-center gap-5 lg:p-5">
        <div className="flex flex-col gap-2 lg:gap-4 ">
          <div className=" mb-4 lg:hidden">
            <img src={img} className="w-full rounded-lg" />
          </div>
          <div className="p-1 bg-[#EBF8F3] text-[#1565D8] font-bold rounded-3xl text-xs max-w-[90px] flex justify-center">
            FEATURED
          </div>
          <h3 className="font-bold text-2xl text-[#183B56]">
            Cheap Airline Tickets Great Ways To Save
          </h3>
          <p className="font-os text-[#5A7184]">
            In this digital generation where information can be easily obtained
            within seconds, business cards ...
          </p>
        </div>
        <div className="w-full flex justify-between text-[#5A7184] pr-5">
          <div className="flex gap-2 w-full">
            <img src={avatar} />
            <div className="flex flex-col">
              <h4 className="font-semibold text-[#183B56]">Viola Manisa</h4>
              <div className="flex items-center gap-2">
                <div className="bg-[#E1F4EC] rounded-full p-[2px]">
                  <RiCheckFill className='text-[#36B37E]' size={15} />
                </div>
                <p className="text-[#5A7184]">Verified</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="whitespace-nowrap">02 May</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePost;
