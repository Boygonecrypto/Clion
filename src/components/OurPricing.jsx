import React from "react";

const OurPricing = () => {
  return (
    <div className="layout mb-[80px]">
      {/* Header */}
      <div className="mb-[50px]">
        <h1 className="font-[satoshi] font-[500] text-[30px] md:text-[45px] text-center text-[#0c0c0c]">
          Our Pricing
        </h1>
        <p className="text-[16px] md:text-[22px] font-[400] font-[satoshi] text-center text-[#363636]">
          Our transparent pricing for all. No setup fee
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[20px]">
        {/* Card 1 */}
        <div className="bg-[#0c0c0c] w-full sm:max-w-[480px] md:max-w-[380px] lg:max-w-[520px] p-6 md:p-8 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row gap-[15px] mb-[20px]">
            <div className="border-b sm:border-b-0 sm:border-r border-[#363636] p-3 flex flex-col justify-between w-full sm:w-auto">
              <p className="text-[#E5E5E5] font-[satoshi] text-[15px] md:text-[14px]">
                Premium
              </p>
              <p className="font-[satoshi] text-[#FFFF] text-[32px] sm:text-[38px] font-[800] mt-[10px] mb-[10px]">
                $39
              </p>
              <p className="font-[satoshi] text-[#c3c3c3] text-[14px] sm:text-[16px] mt-[10px] md:text-[14px]">
                Perfect for Start up (20-100)
              </p>
            </div>
            <div className="p-3 flex flex-col gap-[10px]">
              <p className="text-[#E5E5E5] font-[satoshi] text-[14px] md:text-[13px]">
                Perfect for Start up (20-100)
              </p>
              <p className="text-[#E5E5E5] font-[satoshi] text-[14px] md:text-[13px]">
                Perfect for Start up (20-100)
              </p>
              <p className="text-[#E5E5E5] font-[satoshi] text-[14px] md:text-[13px]">
                Perfect for Start up (20-100)
              </p>
              <p className="text-[#E5E5E5] font-[satoshi] text-[14px] md:text-[13px]">
                Perfect for Start up (20-100)
              </p>
            </div>
          </div>
          <button className="bg-[#FFFF] text-[#0c0c0c] w-full cursor-pointer h-[44px]">
            Purchase
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F6F6F6] w-full sm:max-w-[480px] md:max-w-[380px] lg:max-w-[520px] p-6 md:p-8 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row gap-[15px] mb-[20px]">
            <div className="border-b sm:border-b-0 sm:border-r border-[#363636] p-3 flex flex-col justify-between w-full sm:w-auto">
              <p className="text-[#0C0C0C] font-[satoshi] text-[15px] md:text-[14px]">
                Premium
              </p>
              <p className="font-[satoshi] text-[#0C0C0C] text-[32px] sm:text-[38px] font-[800] mt-[10px] mb-[10px]">
                $39
              </p>
              <p className="font-[satoshi] text-[#666666] text-[14px] sm:text-[16px] mt-[10px] md:text-[14px]">
                Perfect for Start up (20-100)
              </p>
            </div>
            <div className="p-3 flex flex-col gap-[10px]">
              <p className="text-[#666666] font-[satoshi] text-[14px] md:text-[13px]">
                Perfect for Start up (20-100)
              </p>
              <p className="text-[#666666] font-[satoshi] text-[14px] md:text-[13px]">
                Perfect for Start up (20-100)
              </p>
              <p className="text-[#666666] font-[satoshi] text-[14px] md:text-[13px]">
                Perfect for Start up (20-100)
              </p>
              <p className="text-[#666666] font-[satoshi] text-[14px] md:text-[13px]">
                Perfect for Start up (20-100)
              </p>
            </div>
          </div>
          <button className="bg-[#FFFF] text-[#0c0c0c] w-full cursor-pointer h-[44px] border border-[#0c0c0c]">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPricing;
