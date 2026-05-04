import {
  TbWorld,
  TbBriefcase,
  TbMapPin,
  TbMail,
  TbPhone,
} from "react-icons/tb";
import { MdSms } from "react-icons/md";
import { motion } from "framer-motion";

const WhatBarberz = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <section className="">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            What Is
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              {" "}
              Barberz Link?
            </span>
          </h2>

          <p className="text-white/80 text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            Barberz Link is a United States-based digital platform connecting
            barbershops hiring licensed barbers, licensed barbers seeking
            employment, schools & training programs, industry events, business
            resources, and state-by-state licensing information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-5">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 border border-white/10">
              <div
                className="flex items-center justify-center rounded-xl mb-6 bg-gradient-to-r from-amber-400 to-amber-600"
                style={{ width: 52, height: 52 }}
              >
                <TbWorld size={26} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Our Platform
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                Barberz Link serves as a professional networking and marketplace
                platform designed exclusively for the barber industry. We
                connect barbers, barbershop owners, schools, vendors, event
                organizers, and business service providers across all 50 states.
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Our revenue model includes premium subscription plans for
                enhanced job listings, featured profiles, and advanced platform
                features. Basic access is free for all users.
              </p>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 border border-white/10">
              <div
                className="flex items-center justify-center rounded-xl mb-6 bg-gradient-to-r from-amber-400 to-amber-600"
                style={{ width: 52, height: 52 }}
              >
                <TbBriefcase size={26} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Business Information
              </h3>
              <p className="font-bold text-white/80 text-sm mb-4">
                Barberz Link LLC
              </p>

              <div className="flex items-start gap-3 text-sm text-white/80 mb-3">
                <TbMapPin
                  size={16}
                  className="text-[#C48F1A] mt-0.5 shrink-0"
                />
                716 New Berlin Rd, Ste 15, Jacksonville, FL 32218
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80 mb-3">
                <TbMail size={16} className="text-[#C48F1A] shrink-0" />
                support@barberzlink.com
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80 mb-4">
                <TbPhone size={16} className="text-[#C48F1A] shrink-0" />
                (904) 319-3632
              </div>
              <p className="text-[#C48F1A] font-semibold text-sm">
                Available Nationwide (United States)
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-amber-600"
                style={{ width: 52, height: 52 }}
              >
                <MdSms size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">
                SMS & Communication Consent
              </h3>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-3">
              By providing your phone number and creating an account, you
              consent to receive SMS messages from Barberz Link regarding
              account notifications, job alerts, and platform updates. Message
              frequency varies. Message and data rates may apply.
            </p>
            <p className="text-sm text-white/80 leading-relaxed mb-3">
              Reply <strong className="text-white/80">STOP</strong> to
              unsubscribe at any time. Reply{" "}
              <strong className="text-white/80">HELP</strong> for assistance.
              View our{" "}
              <a href="#" className="text-[#C48F1A] underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#C48F1A] underline">
                Terms & Conditions
              </a>
              .
            </p>
            <p className="text-[#C48F1A] font-semibold text-sm">
              Barberz Link does not sell or share phone numbers for third-party
              marketing.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WhatBarberz;
