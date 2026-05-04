import { RiScissorsFill } from "react-icons/ri";
import { FaBuilding } from "react-icons/fa";

import { PiGraduationCapBold } from "react-icons/pi";
import { MdEmojiEvents } from "react-icons/md";
import { motion } from "framer-motion";

const WhoItsFor = () => {
  const cards = [
    {
      icon: <RiScissorsFill size={26} />,
      title: "Barbers",
      desc: "Find your next opportunity, showcase your skills, and connect with top shops nationwide.",
      list: [
        "Job search & applications",
        "Professional portfolio",
        "Industry events",
        "Business resources",
      ],
    },
    {
      icon: <FaBuilding size={26} />,
      title: "Barbershops",
      desc: "Hire talented barbers, post job listings, and grow your team with qualified professionals.",
      list: [
        "Post job listings",
        "Search barber profiles",
        "Direct messaging",
        "Shop promotion",
      ],
    },
    {
      icon: <PiGraduationCapBold size={26} />,
      title: "Schools & Programs",
      desc: "Connect students with opportunities and help them launch successful careers.",
      list: [
        "Student placement",
        "Industry partnerships",
        "Event hosting",
        "Resource sharing",
      ],
    },
    {
      icon: <MdEmojiEvents size={26} />,
      title: "Event Organizers",
      desc: "Promote competitions, trade shows, and networking events to the barber community.",
      list: [
        "Event creation",
        "Ticket management",
        "Attendee tracking",
        "Promotion tools",
      ],
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
            Who It'{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              For
            </span>
          </h2>

          <p className="text-white/80 text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you're cutting hair, running a shop, training the next
            generation, or organizing industry events — Barberz Link is built
            for you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-neutral-900 to-neutral-950  rounded-2xl p-6  transition-shadow duration-200"
              >
                <div
                  className={`flex items-center justify-center rounded-xl mb-5 bg-gradient-to-r from-amber-400 to-amber-600 text-white`}
                  style={{ width: 52, height: 52 }}
                >
                  {card.icon}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {card.title}
                </h3>

                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  {card.desc}
                </p>

                <ul className="space-y-1.5">
                  {card.list.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WhoItsFor;
