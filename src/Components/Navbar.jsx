import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { MobileMenu } from "./MobileMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <div className="border-b border-[#ffffff4f]  sticky top-0 bg-black z-30 ">
      <div className="max-w-[85%]  justify-between items-center m-auto  hidden lg:flex">
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="" width={80} />{" "}
        </Link>

        <ul className=" text-[15px] gap-10 text-[white] font-semibold  items-center hidden lg:flex">
          <Link to={"/"}>
            {" "}
            <li
              className="relative  cursor-pointer 
  before:content-[''] before:absolute before:left-0 before:-bottom-1 
  before:h-0.5 before:w-0   before:bg-[#C48F1A] before:transition-all before:duration-300 
  hover:before:w-full"
            >
              Home
            </li>{" "}
          </Link>
          <Link to="/services">
            {" "}
            <li
              className="relative  cursor-pointer 
  before:content-[''] before:absolute before:left-0 before:-bottom-1 
  before:h-0.5 before:w-0   before:bg-[#C48F1A]
  before:transition-all before:duration-300 
  hover:before:w-full"
            >
              Services
            </li>{" "}
          </Link>
          <Link to={"/about"}>
            {" "}
            <li
              className="relative  cursor-pointer 
  before:content-[''] before:absolute before:left-0 before:-bottom-1 
  before:h-0.5 before:w-0   before:bg-[#C48F1A]
  before:transition-all before:duration-300 
  hover:before:w-full"
            >
              About
            </li>{" "}
          </Link>
          <Link to={"/support"}>
            {" "}
            <li
              className="relative  cursor-pointer 
  before:content-[''] before:absolute before:left-0 before:-bottom-1 
  before:h-0.5 before:w-0   before:bg-[#C48F1A]
  before:transition-all before:duration-300 
  hover:before:w-full"
            >
              Support
            </li>{" "}
          </Link>
          <li className=" cursor-pointer font-normal bg-gradient-to-r from-amber-400 to-amber-600  text-white   p-3 rounded-full px-10">
            Get Started
          </li>
        </ul>
      </div>

      <MobileMenu />
    </div>
  );
};

export default Navbar;
