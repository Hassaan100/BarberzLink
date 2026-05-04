import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  const team = [
    {
      name: "Leadership Team",
      description:
        "Experienced professionals from the barbering and technology industries",
    },
    {
      name: "Product Team",
      description:
        "Dedicated to building the best platform for barbers worldwide",
    },
    {
      name: "Support Team",
      description: "Available 24/7 to help you succeed on your journey",
    },
  ];
  return (
    <section className="py-16 bg-linear-to-b from-black to-neutral-950">
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
              Our Team
            </span>
          </h2>
          <p className="text-white/70 text-lg">
            Passionate professionals dedicated to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 border border-white/10 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {member.name}
              </h3>
              <p className="text-white/70">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
