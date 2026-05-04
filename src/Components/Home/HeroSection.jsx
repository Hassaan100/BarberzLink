// bg-linear-to-br from-orange-50 via-pink-50 to-purple-50
import React from "react";
import { FaRegFile } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className=" py-14 xl:h-[90vh] bg-no-repeat bg-left bg-cover flex justify-center items-center
 "
      >
        <div className="  w-[90%] lg:w-full xl:width-full width justify-center items-center flex flex-col gap-8 md:gap-10 lg:gap-10 xl:gap-10 ">
          <p className="flex gap-2 items-center bg-gradient-to-r from-amber-400 to-amber-600 px-5 py-2 rounded-full text-[12px]  text-white">
            {" "}
            <FaRegFile />
            The #1 Platform for Barber Professionals
          </p>
          <h1 className="text-white font-black text-[30px]  text-center leading-10 md:leading-16   md:text-[40px] lg:text-[50px] xl:text-[80px] lg:leading-20">
            Hire. Connect.
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Grow.
            </span>
          </h1>
          <p className="text-center  font-medium text-lg md:text-2xl lg:text-[20px] text-white/80">
            The nationwide professional platform exclusively for the barber
            industry. <br></br> Find jobs, discover events, access resources,
            and build your career.
          </p>
          <div className="  flex flex-col md:flex-row  gap-5">
            <button className=" cursor-pointer font-normal bg-gradient-to-r from-amber-400 to-amber-600    text-white py-5 rounded-full px-10 text-[18px]  ">
              Download on App Store
            </button>
            <button className=" border-2 border-[#C48F1A] cursor-pointer font-normal bg-linear-to-r  g-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent  py-5 rounded-full px-10 text-[18px] bg-transparent">
              Get it on Google Play
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
