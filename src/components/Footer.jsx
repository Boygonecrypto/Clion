import React from "react";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] pt-[35px] pb-[35px] relative">
      <div className="layout">
        <div className="flex items-start justify-between flex-wrap lg:flex-nowrap">
          {/* Logo */}
          <div className="h-[56px] w-[141px] mb-4 lg:mb-0">
            <img src={logo} alt="Clion Logo" />
          </div>

          {/* Right section: Services + Info + Button */}
          <div className="flex gap-[96px] flex-wrap lg:flex-nowrap mb-4 lg:mb-0">
            {/* Grouping Services & Info */}
            <div className="flex gap-[96px] flex-wrap lg:flex-nowrap">
              {/* Services */}
              <div>
                <p className="text-[#d9d9d9] font-[satoshi] text-[12px] font-[400] opacity-[50%] mb-[12px]">
                  Services
                </p>
                <div className="flex flex-col gap-[10px] text-[#ffff] text-[14px] font-[satoshi] font-[400]">
                  <p>Loans and Grants</p>
                  <p>Financial Advisory</p>
                  <p>Revenue growth program</p>
                  <p>Investment matching</p>
                </div>
                <div className="bg-[#ffff] w-[45px] h-[1px] mt-[50px] lg:mt-[150px]"></div>
              </div>

              {/* Info */}
              <div>
                <p className="text-[#d9d9d9] font-[satoshi] text-[12px] font-[400] opacity-[50%] mb-[12px]">
                  Info
                </p>
                <div className="flex flex-col gap-[10px] text-[#ffff] text-[14px] font-[satoshi] font-[400]">
                  <p>About Us</p>
                  <p>Projects</p>
                  <p>News</p>
                  <p>Partners</p>
                  <p>Contacts</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex items-start">
              <button className="bg-[#ffff] text-[#0c0c0c] font-[satoshi] font-[400] text-[14px] w-[160px] h-[40px] cursor-pointer">
                Get a consultation
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[35px] flex-wrap lg:flex-nowrap">
          <div className="flex items-center gap-[12px] mb-4 lg:mb-0">
            <div className="border border-[#363636] w-[50px] h-[50px]">
              <img src={instagram} alt="instagram icon" />
            </div>
            <div className="border border-[#363636] w-[50px] h-[50px]">
              <img src={facebook} alt="facebook icon" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-[5px] font-[satoshi] font-[400] text-[14px] text-[#ffff] mb-4 lg:mb-0 lg:absolute lg:left-[56.5%] xl:left-[54.5%] ">
            <p>+1 891 989-11-91</p>
            <p>info@clion.com</p>
          </div>
          <div className="flex flex-col items-start gap-[5px] font-[sfProText] font-[400] text-[12px] text-[#d9d9d9] opacity-[50%] mt-[20px] mb-2 md:mb-4 lg:mb-0">
            <p>©️ 2025 — Copyright</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
