import { TbUserPlus, TbUserCog, TbLink, TbMessageCircle } from "react-icons/tb";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: <TbUserPlus size={26} />,
      step: "Step 1",
      title: "Create an Account",
      desc: "Sign up free as a barber, barbershop owner, school, event organizer, or vendor.",
    },
    {
      icon: <TbUserCog size={26} />,
      step: "Step 2",
      title: "Build Your Profile",
      desc: "Add your experience, licensing, location, services, and portfolio.",
    },
    {
      icon: <TbLink size={26} />,
      step: "Step 3",
      title: "Connect or Post Opportunities",
      desc: "Browse jobs, post openings, discover events, and explore resources.",
    },
    {
      icon: <TbMessageCircle size={26} />,
      step: "Step 4",
      title: "Message Directly",
      desc: "Connect and communicate directly with shops, barbers, and organizers on the platform.",
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
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            How It{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="text-white/80 text-base max-w-xl mx-auto mb-16 leading-relaxed">
            Getting started on Barberz Link is simple. Here's how you can begin
            connecting with the barber industry.
          </p>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="hidden lg:block absolute top-6.5 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 z-0" />

            {steps.map((s, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-tex  flex items-center justify-center mb-4 shadow-md text-white
              "
                >
                  {s.icon}
                </div>

                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-bold text-sm mb-1">
                  {s.step}
                </span>

                <h3 className="text-base font-bold text-white mb-2">
                  {s.title}
                </h3>

                <p className="text-sm text-white/80 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HowItWorks;
