import { TbShieldCheck, TbBolt, TbWorld, TbAward } from "react-icons/tb";
import { motion } from "framer-motion";

import { AiFillStar } from "react-icons/ai";

const WhyBarberzLink = () => {
  const features = [
    {
      icon: <TbShieldCheck size={22} />,
      title: "Industry Exclusive",
      desc: "Built specifically for barbers by people who understand the industry.",
    },
    {
      icon: <TbBolt size={22} />,
      title: "All-in-One Platform",
      desc: "Jobs, events, resources, and networking — everything in one place.",
    },
    {
      icon: <TbWorld size={22} />,
      title: "Nationwide Reach",
      desc: "Connect with opportunities and professionals across all 50 states.",
    },
    {
      icon: <TbAward size={22} />,
      title: "Professional Growth",
      desc: "Resources and tools designed to help you build a successful career.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <section className="">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Why{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Barberz Link?
                </span>
              </h2>
              <p className="text-white/80 text-base mb-10 leading-relaxed max-w-md">
                We're not just another job board. We're a complete professional
                ecosystem designed to elevate the barber industry and everyone
                in it.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((f, i) => (
                  <div key={i}>
                    <div className="w-10 h-10 rounded-xl  flex items-center justify-center mb-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white">
                      {f.icon}
                    </div>
                    <h3 className="text-sm font-bold  text-amber-400 mb-1">
                      {f.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Testimonial */}
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-7 shadow-sm w-full max-w-md">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} size={20} className="text-amber-400" />
                  ))}
                </div>

                <p className="text-white/80 text-base leading-relaxed mb-6 font-medium">
                  "Barberz Link helped me find my dream shop in a new city. The
                  licensing info made my move seamless, and I connected with an
                  amazing team within weeks."
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center font-bold text-white text-sm shrink-0">
                    MJ
                  </div>
                  <div>
                    <p className="text-sm font-bold text-amber-400">
                      Marcus Johnson
                    </p>
                    <p className="text-xs text-white/80">
                      Master Barber, Atlanta GA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WhyBarberzLink;
