import React from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const milestones = [
    {
      year: "2020",
      event: "Barberzlink Founded",
      description: "Started with a vision to connect the barbering community",
    },
    {
      year: "2021",
      event: "10,000 Users",
      description: "Reached our first major milestone in user growth",
    },
    {
      year: "2022",
      event: "National Expansion",
      description: "Expanded services nationwide across the United States",
    },
    {
      year: "2023",
      event: "Educational Platform",
      description: "Launched comprehensive barber training programs",
    },
    {
      year: "2024",
      event: "50,000+ Community",
      description: "Grew to become the largest barber platform in the nation",
    },
    {
      year: "2026",
      event: "Industry Leader",
      description: "Recognized as the #1 platform for barber professionals",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-neutral-950">
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
              Our Journey
            </span>
          </h2>
          <p className="text-white/70 text-lg">Key milestones in our growth</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-400 to-amber-600" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-2 w-5 h-5 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full border-4 border-black" />

                  <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-amber-400 font-bold text-xl">
                        {milestone.year}
                      </span>
                      <span className="text-white font-semibold text-lg">
                        {milestone.event}
                      </span>
                    </div>
                    <p className="text-white/70">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
