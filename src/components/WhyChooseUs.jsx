import React from "react";
import present from "../assets/present.png";
import office from "../assets/office.png";
import brainstorm from "../assets/brainstorm.png";

const WhyChooseUs = () => {
  return (
    <div className="layout mb-[60px]">
      <div>
        <h1 className="font-[satoshi] font-[500] text-[24px] sm:text-[30px] md:text-[45px] text-center text-[#0c0c0c] mb-[15px]">
          Why Choose Us
        </h1>
        <p className="font-[satoshi] text-[#363636] text-[14px] sm:text-[16px] md:text-[22px] leading-[1.4] text-center mb-[20px] md:mb-[40px] max-w-[610px] mx-auto">
          Empower yourself with expert insights, practical strategies, and the
          tools to take control of your financial future.
        </p>
        <div className="flex flex-col items-center">
          {/* First Block */}
          <div className="flex flex-col gap-[40px] sm:flex-row sm:gap-[30px] lg:gap-[48px] mb-[40px] md:mb-[60px] lg:mb-[80px]">
            <div className="sm:pt-[40px] lg:pt-[70px] pr-[10px]">
              <h1 className="text-[18px] sm:text-[20px] md:text-[25px] lg:text-[35px] text-[#0c0c0c] font-[700] font-[satoshi] mb-[6px]">
                High Startup Success Rate
              </h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[22px] font-[satoshi] text-[#363636] leading-[1.4] font-[400] w-full max-w-[100%] sm:max-w-[582px] lg:max-w-[500px]">
                Startups we support have a{" "}
                <span className="text-[#0c0c0c] font-[700] font-[satoshi]">
                  70% success rate
                </span>{" "}
                after three years, compared to the global{" "}
                <span className="text-[#0c0c0c] font-[700] font-[satoshi]">
                  average of 50%
                </span>
                . Our financial strategies and tailored funding solutions help
                businesses survive and thrive in competitive markets.
              </p>
            </div>
            <div className="w-full max-w-[530px]">
              <img
                src={brainstorm}
                alt="Office Brain Storming"
                className="w-full"
              />
            </div>
          </div>

          {/* Second Block */}
          <div className="flex flex-col gap-[40px] sm:flex-row sm:gap-[30px] lg:gap-[48px] mb-[30px] md:mb-[60px] lg:mb-[80px]">
            <div className="w-full max-w-[530px]">
              <img
                src={present}
                alt="Project Presentation"
                className="w-full"
              />
            </div>
            <div className="sm:pt-[40px] lg:pt-[70px] pr-[10px]">
              <h1 className="text-[18px] sm:text-[20px] md:text-[25px] lg:text-[35px] text-[#0c0c0c] font-[700] font-[satoshi] mb-[6px]">
                Expert Financial Guidance
              </h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[22px] font-[satoshi] text-[#363636] leading-[1.4] font-[400] w-full max-w-[100%] sm:max-w-[582px] lg:max-w-[500px]">
                Our team includes financial experts with{" "}
                <span className="text-[#0c0c0c] font-[700] font-[satoshi]">
                  10+ years of experience
                </span>{" "}
                providing hands-on advisory to help startups optimize their
                revenue streams, manage cash flow, and increase profitability by
                an{" "}
                <span className="text-[#0c0c0c] font-[700] font-[satoshi]">
                  average of 30%
                </span>{" "}
                within the first year.
              </p>
            </div>
          </div>

          {/* Third Block */}
          <div className="flex flex-col gap-[40px] sm:flex-row sm:gap-[30px] lg:gap-[48px] md:mb-[60px] lg:mb-[80px]">
            <div className="sm:pt-[40px] lg:pt-[70px] pr-[10px]">
              <h1 className="text-[18px] sm:text-[20px] md:text-[25px] lg:text-[35px] text-[#0c0c0c] font-[700] font-[satoshi] mb-[6px]">
                Fast & Flexible Funding
              </h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[22px] font-[satoshi] text-[#363636] leading-[1.4] font-[400] w-full max-w-[100%] sm:max-w-[582px] lg:max-w-[500px]">
                Clion offers loan approvals in as little as 48 hours, with
                flexible repayment plans that adapt to business growth. Unlike
                traditional banks, we prioritize accessibility and efficiency,
                ensuring startups get the capital they need when they need it.
              </p>
            </div>
            <div className="w-full max-w-[530px]">
              <img src={office} alt="Office" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
