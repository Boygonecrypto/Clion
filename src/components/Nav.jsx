import React from "react";
import logo from "../assets/logo.png";
import { CiMenuKebab } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";

import { useState } from "react";

const links = [
  { title: "Home", to: "#" },
  { title: "About", to: "#" },
  { title: "Contact", to: "#" },
  { title: "Resources", to: "#" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div className="layout flex items-center justify-between h-[84px]">
        <div className="">
          <img src={logo} alt="Clion Logo" />
        </div>
        <div className="hidden text-[#FFFF] font-mono md:flex items-center text-[16px] font-[400] gap-[65px]">
          {links.map((link, i) => {
            return (
              <a key={i} href="{link.to}">
                {link.title}
              </a>
            );
          })}
        </div>
        <div className="block md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoCloseCircleOutline size={30} />
            ) : (
              <CiMenuKebab size={30} />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#000] absolute top-[105px] w-1/2 left-0 p-2.5">
            <div className="flex flex-col gap-[49px] text-[16px] font-bold text-[#fcfcfc]">
              {links.map((link, index) => {
                return (
                  <a key={index} href="{link.to}">
                    {link.title}
                  </a>
                );
              })}
            </div>
            <button className="bg-[#fdfdfd] mt-[49px] w-[138px] h-[42px] rounded-[44px] text-[#1d1d1d] font-bold text-[16px]">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
