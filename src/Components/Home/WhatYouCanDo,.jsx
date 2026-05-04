import {
  TbBriefcase,
  TbCalendar,
  TbBook,
  TbMapPin,
  TbCube,
  TbMessageCircle,
} from "react-icons/tb";
import { motion } from "framer-motion";

const WhatYouCanDo = () => {
  const features = [
    {
      icon: <TbBriefcase size={24} />,
      title: "Job Board",
      desc: "Browse thousands of barber positions or post openings for your shop.",
    },
    {
      icon: <TbCalendar size={24} />,
      title: "Events Hub",
      desc: "Discover competitions, trade shows, and networking events nationwide.",
    },
    {
      icon: <TbBook size={24} />,
      title: "Business Resources",
      desc: "Access guides on banking, insurance, retirement planning, and more.",
    },
    {
      icon: <TbMapPin size={24} />,
      title: "State Licensing",
      desc: "Complete licensing info for all 50 states, including reciprocity rules.",
    },
    {
      icon: <TbCube size={24} />,
      title: "Products & Tools",
      desc: "Explore professional products, equipment, and industry tools.",
    },
    {
      icon: <TbMessageCircle size={24} />,
      title: "Direct Messaging",
      desc: "Connect directly with shops, barbers, and event organizers.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <section className=" ">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            What You Can{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Do
            </span>
          </h2>

          <p className="text-white/80 text-base max-w-xl mx-auto mb-12 leading-relaxed">
            Everything you need to succeed in the barber industry, all in one
            platform.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6  flex items-start gap-4"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl  flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-600 text-white">
                  {f.icon}
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WhatYouCanDo;
