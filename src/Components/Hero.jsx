import React from "react";
import { motion } from "motion/react";

const Hero = ({ title, desc }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-neutral-950">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">{desc}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
