import React from "react";
import { motion } from "framer-motion";

import { Users, Award, TrendingUp, Globe } from "lucide-react";
const Stats = () => {
  const stats = [
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: TrendingUp, value: "5K+", label: "Barbershops" },
    { icon: Award, value: "500+", label: "Events Hosted" },
    { icon: Globe, value: "98%", label: "Satisfaction Rate" },
  ];
  return (
    <section className="py-16 bg-gradient-to-b from-neutral-950 to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-500/20 rounded-full mb-4">
                  <Icon className="text-amber-400" size={28} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
