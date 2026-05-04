import React from "react";
import { motion } from "motion/react";

const Story = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-neutral-950 to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Our Story
              </span>
            </h2>
            <div className="space-y-4 text-white/80 text-lg">
              <p>
                Barberzlink was born from a simple observation: the barbering
                industry needed a dedicated platform that understood its unique
                needs and challenges.
              </p>
              <p>
                Founded by barbers for barbers, we set out to create more than
                just another directory. We envisioned a comprehensive ecosystem
                where professionals could connect, grow their businesses, access
                education, and build meaningful relationships within the
                community.
              </p>
              <p>
                Today, Barberzlink serves over 50,000 barbers, barbershops,
                educators, and industry professionals across the nation. We're
                proud to be the trusted platform that helps barbers at every
                stage of their career – from students just starting out to
                master barbers building their legacy.
              </p>
              <p>
                Our mission remains unchanged: to empower the barbering
                community with the tools, resources, and connections they need
                to succeed in an ever-evolving industry.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NzYxNjUxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Barberzlink team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full blur-3xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
