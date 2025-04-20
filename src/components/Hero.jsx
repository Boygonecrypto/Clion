import React from "react";

const Hero = () => {
  return (
    <div className="layout w-full flex items-center gap-[10px] lg:items-end mt-[90px] md:mt-[180px]">
      <div className="max-w-[673px]">
        <h1 className="text-white text-[35px] md:text-[50px] lg:text-[67px] font-[500] leading-[1.2] font-[satoshi] mb-[20px]">
          The Institute For Financial Liberation
        </h1>
        <p className="text-[22px] text-white leading-[1.4] font-[satoshi] mb-[10px] ">
          Empower yourself with expert insights, practical strategies, and the
          tools to take control of your financial future.
        </p>
        <button className="bg-[#FFFF] text-[16px] text-[#0c0c0c] p-2.5 mt-[60px] md:mt-[20px] ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
