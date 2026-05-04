import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
const Mission = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-neutral-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 border border-white/10"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-6">
              <Target className="text-white" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/70 text-lg">
              To provide the barbering community with a comprehensive platform
              that connects professionals, facilitates growth, and elevates the
              industry standard through innovation, education, and
              collaboration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 border border-white/10"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-white" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/70 text-lg">
              To be the world's leading platform for barbering professionals,
              creating a global community where every barber has access to the
              resources, education, and opportunities they need to achieve
              excellence and build lasting success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
