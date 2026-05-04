import React from "react";
import { motion } from "framer-motion";
import { Heart, Award, Globe, Zap } from "lucide-react";
const Values = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description:
        "We believe in empowering the barbering community by creating connections and opportunities for growth.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from our platform features to customer support.",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description:
        "We welcome barbers from all backgrounds and skill levels to join and thrive in our community.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We continuously innovate to provide cutting-edge tools and features for modern barbers.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-neutral-950 to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>
          <p className="text-white/70 text-lg">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-2xl p-8 border border-white/10 hover:border-amber-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
