import { useState } from "react";
import {
  TbPhone,
  TbCheck,
  TbFileText,
  TbSend,
  TbShieldLock,
  TbAlertTriangle,
} from "react-icons/tb";
import { GrNotes } from "react-icons/gr";
import { motion } from "framer-motion";

const SMSConsent = () => {
  const [agreed, setAgreed] = useState(false);
  const [phone, setPhone] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <section className="">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-5xl"> 📱 </span>
            <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              SMS Consent & Agreement
            </h1>
          </div>

          <p className="text-white/80 text-sm text-center mb-3 leading-relaxed">
            Consent is completely optional and is{" "}
            <span className="font-extrabold  text-amber-400">not required</span>{" "}
            to use Barberz Link or access any of our services.
          </p>
          <p className="text-white/80 text-sm text-center mb-8 leading-relaxed">
            By opting in below, you agree to receive SMS messages from Barberz
            Link for account alerts, job notifications, event reminders, and
            appointment confirmations. You may opt out at any time by replying
            STOP.
          </p>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 shadow-sm mb-5">
            <div className="mb-5">
              <label className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                <TbPhone size={16} className="text-[#C48F1A]" /> Phone Number
              </label>
              <input
                type="tel"
                placeholder="(555) 555-5555"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-white/80 outline-[#C48F1A]"
              />
            </div>

            <div
              className="flex items-start gap-3 cursor-pointer mb-5"
              onClick={() => setAgreed(!agreed)}
            >
              <div
                className="w-5 h-5 mt-0.5 rounded shrink-0 border-2 flex items-center justify-center transition-colors"
                style={
                  agreed
                    ? { backgroundColor: "#C48F1A", borderColor: "#C48F1A" }
                    : { borderColor: "#C48F1A" }
                }
              >
                {agreed && (
                  <TbCheck size={13} className="text-white" strokeWidth={3} />
                )}
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                I Consent to Receive SMS Notifications & Alerts from Barberz
                Link. Message frequency varies. Message & data rates may apply.
                You can reply <strong>STOP</strong> to unsubscribe at any time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl p-4 mb-5">
              <p className="text-xs font-bold text-amber-400 mb-1 flex items-center gap-1">
                <TbFileText size={14} className="text-amber-400" /> Review
                Before You Opt In
              </p>
              <p className="text-xs text-white/80">
                Please review our policies before providing consent:{" "}
                <a href="#" className="text-amber-400 underline">
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a href="#" className="text-amber-400 underline">
                  Terms & Conditions
                </a>
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 w-full font-bold text-sm py-3 rounded-xl text-white  bg-gradient-to-r from-amber-400 to-amber-600 cursor-pointer">
              <TbSend size={16} /> Submit SMS Consent
            </button>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 shadow-sm mb-5">
            <h2 className="flex items-center gap-2 text-sm font-bold text-white mb-3">
              <GrNotes size={16} className="text-amber-400" /> Campaign Purpose
              & Message Description
            </h2>
            <p className="text-sm text-white/80 leading-relaxed mb-3">
              <strong>Barberz Link</strong> is a professional networking and
              marketplace platform for the barber industry. SMS messages are
              sent by Barberz Link to registered users who have voluntarily
              opted in.
            </p>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              <strong>Purpose of Messages:</strong> Barberz Link sends SMS
              messages strictly for platform-related communications. Messages
              are transactional and informational in nature — they are{" "}
              <strong>not</strong> used for marketing or promotional purposes.
            </p>

            <p className="text-sm font-bold text-white mb-2">
              Types of Messages You May Receive:
            </p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 bg-[#C48F1A]" />
                <span>
                  <strong className="text-amber-400">
                    Account Verification
                  </strong>{" "}
                  — One-time passcodes (OTP) for secure login
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 bg-[#C48F1A]" />
                <span>
                  <strong className="text-amber-400">Job Notifications</strong>{" "}
                  — Alerts for new job postings and interview updates
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 bg-[#C48F1A]" />
                <span>
                  <strong className="text-amber-400">Event Reminders</strong> —
                  Updates on upcoming barber industry events
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 bg-[#C48F1A]" />
                <span>
                  <strong className="text-amber-400">Account Alerts</strong> —
                  Important account and support communications
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 bg-[#C48F1A]" />
                <span>
                  <strong className="text-amber-400">
                    Appointment Reminders
                  </strong>{" "}
                  — Booking confirmations and reminders
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 shadow-sm mb-5">
            <h2 className="flex items-center gap-2 text-sm font-bold text-white mb-3">
              <TbCheck size={16} className="text-amber-400" /> How End Users
              Consent to Receive Messages
            </h2>
            <p className="text-sm text-white/80 leading-relaxed mb-3">
              Users opt in to receive SMS notifications by voluntarily entering
              their phone number, checking the consent checkbox, and clicking
              the <strong>"Submit SMS Consent"</strong> button on this page.
              Consent may also be collected during the registration process.
            </p>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              The consent checkbox is <strong>not pre-checked</strong> — users
              must actively select it to opt in. Consent is never assumed,
              forced, or bundled with other agreements.
            </p>
            <p className="text-sm font-bold text-white mb-2">
              Consent is collected at the following URLs:
            </p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 bg-[#C48F1A]" />
                <span className="text-white/80">
                  <strong>Consent Form:</strong>{" "}
                  <a href="#" className="text-[#C48F1A] underline break-all">
                    https://www.barberzlink.com/sms-consent
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 bg-[#C48F1A]" />
                <span className="text-white/80">
                  <strong>Registration Page:</strong>{" "}
                  <a href="#" className="text-[#C48F1A] underline break-all">
                    https://www.barberzlink.com/register
                  </a>
                </span>
              </li>
            </ul>

            <div className="mt-4 space-y-1">
              <p className="text-sm text-white/80">
                Message frequency varies (approximately 1-5 messages per week).
              </p>
              <p className="text-sm text-white/80">
                Message and data rates may apply.
              </p>
              <p className="text-sm text-white/80">
                You can reply <strong>STOP</strong> at any time to opt out and
                stop receiving messages.
              </p>
              <p className="text-sm text-white/80">
                Reply <strong>HELP</strong> for assistance or contact{" "}
                <a
                  href="mailto:support@barberzlink.com"
                  className="text-[#C48F1A] underline"
                >
                  support@barberzlink.com
                </a>
                .
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 shadow-sm mb-5">
            <h2 className="flex items-center gap-2 text-sm font-bold text-white mb-3">
              <TbShieldLock size={16} className="text-[#C48F1A]" /> 🔒 Your
              Number is Private
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Barberz Link will{" "}
              <strong>never sell, share, or distribute</strong> your mobile
              phone number to third parties for marketing or promotional
              purposes.
            </p>
          </div>

          <div className="rounded-2xl p-6 border bg-gradient-to-br from-neutral-900 to-neutral-950 border-amber-400">
            <h2 className="flex items-center gap-2 text-sm font-bold text-white mb-3 ">
              <TbAlertTriangle size={16} className="text-[#C48F1A]" /> ⚠️
              Consent is NOT Required to Use Our Services
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Providing your phone number and opting in to SMS is{" "}
              <strong>entirely optional</strong>. Consent is not a condition of
              purchase, registration, or use of any Barberz Link services. You
              can use Barberz Link fully without opting in to SMS.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SMSConsent;
