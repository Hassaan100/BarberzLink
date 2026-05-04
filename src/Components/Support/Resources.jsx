import React from "react";
import { motion } from "motion/react";
import { BookOpen } from "lucide-react";
import { IoChatbubbleEllipses } from "react-icons/io5";

import { FaCamera } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

const Resources = () => {
  const resourceList = [
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      icon: <FaCamera />,
    },
    {
      title: "User Guides",
      description: "Detailed documentation and how-to articles",
      icon: <FaBookOpen />,
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share tips",
      icon: <IoChatbubbleEllipses />,
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-400/90 rounded-full mb-6">
            <BookOpen className="text-white" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Help Resources
            </span>
          </h2>
          <p className="text-white/70 text-lg">
            Explore our comprehensive guides and tutorials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resourceList.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-linear-to-br from-neutral-900 to-neutral-950 rounded-xl p-8 border border-white/10 hover:border-amber-400 transition-all text-center"
            >
              <div className="text-5xl mb-4 text-amber-400 flex justify-center items-center">
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {resource.title}
              </h3>
              <p className="text-white/70 mb-4">{resource.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-amber-400 font-semibold hover:text-amber-300 transition-colors"
              >
                Explore →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
