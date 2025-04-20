import React from "react";
import flower from "../assets/flower.png";
import shades from "../assets/shades.png";
import shapes from "../assets/shapes.png";
import at from "../assets/at.png";

const Efficient = () => {
  return (
    <div className="layout mt-[90px] mb-[60px]">
      <div>
        <h1 className="font-[satoshi] text-[30px] md:text-[45px] text-[#0c0c0c] text-center font-[500]">
          Creating Efficient Financial Growth
        </h1>
        <p className="font-[satoshi] font-[400] text-[#363636] text-center text-[20px] md:text-[22px] mb-[40px]">
          Empower yourself with expert insights, practical strategies, and the
          tools <br /> to take control of your financial future.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-[20px] justify-center">
          <div className="border border-[#D9D9D9] max-w-[295px] w-full p-4">
            <img
              src={flower}
              alt="flower icon"
              className="w-13 h-13 mb-[100px]"
            />
            <div>
              <h1 className="text-[20px] md:text-[22px] font-[satoshi] font-[500] text-[#0c0c0c] mb-[5px]">
                Startup Loans & Grants
              </h1>
              <p className="text-[14px] md:text-[16px] font-[satoshi] font-[400] text-[#363636] leading-[1.4] flex items-center">
                Flexible funding solutions to <br /> kickstart or expand
                businesses.
              </p>
            </div>
          </div>
          <div className="border border-[#D9D9D9] max-w-[295px] w-full p-4">
            <img
              src={shades}
              alt="shades icon"
              className="w-13 h-13 mb-[100px]"
            />
            <div>
              <h1 className="text-[20px] md:text-[22px] font-[satoshi] font-[500] text-[#0c0c0c] mb-[5px]">
                Financial Advisory
              </h1>
              <p className="text-[14px] md:text-[16px] font-[satoshi] font-[400] text-[#363636] leading-[1.4] flex items-center">
                Expert guidance on cash flow <br /> management and budgeting
              </p>
            </div>
          </div>
          <div className="border border-[#D9D9D9] max-w-[295px] w-full p-4">
            <img src={at} alt="spiral icon" className="w-13 h-13 mb-[100px]" />
            <div>
              <h1 className="text-[20px] md:text-[22px] font-[satoshi] font-[500] text-[#0c0c0c] mb-[5px]">
                Revenue Growth Program
              </h1>
              <p className="text-[14px] md:text-[16px] font-[satoshi] font-[400] text-[#363636] leading-[1.4] flex items-center">
                Tools and mentorship to optimize <br /> profitability and
                sustainability.
              </p>
            </div>
          </div>
          <div className="border border-[#D9D9D9] max-w-[295px] w-full p-4">
            <img
              src={shapes}
              alt="shapes icon"
              className="w-13 h-13 mb-[100px]"
            />
            <div>
              <h1 className="text-[20px] md:text-[22px] font-[satoshi] font-[500] text-[#0c0c0c] mb-[5px]">
                Investment Matching
              </h1>
              <p className="text-[14px] md:text-[16px] font-[satoshi] font-[400] text-[#363636] leading-[1.4] flex items-center">
                Connecting startups with potential <br /> investors and venture
                capitalists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Efficient;
