import { FaApple, FaGooglePlay } from "react-icons/fa";
import { TbArrowRight } from "react-icons/tb";
import { motion } from "framer-motion";

const ReadyToElevate = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <section className="p-6 md:p-8  lg:max-w-7xl m-auto  mb-15 ">
        <div className="lg:max-w-7xl mx-auto px-6 py-20 text-center bg-gradient-to-r from-amber-600 to-amber-500 rounded-3xl m-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready to Elevate Your Career?
          </h2>

          <p className="text-white/80 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Join thousands of barber professionals who are already using Barberz
            Link to find opportunities, connect with peers, and grow their
            careers.
          </p>

          <div className="  flex flex-col md:flex-row  gap-5 justify-center items-center pb-5">
            <button className=" cursor-pointer font-normal bg-white    text-[#C48F1A]  py-3 rounded-full px-6 text-[18px]  ">
              Download on App Store
            </button>
            <button className=" border-2 border-white cursor-pointer font-normal bg-linear-to-r  text-white py-3 rounded-full px-6 text-[18px] bg-transparent">
              Get it on Google Play
            </button>
          </div>
          <p className="text-white/80 text-sm mb-4">Available on all devices</p>

          <div className="flex items-center justify-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-amber-400 shadow-sm hover:shadow-md transition-shadow">
              <FaApple size={16} className="text-black" /> App Store
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-amber-400 shadow-sm hover:shadow-md transition-shadow">
              <FaGooglePlay size={14} className="text-black" /> Google Play
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ReadyToElevate;
