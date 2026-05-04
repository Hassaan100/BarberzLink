import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-neutral-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 md:p-12 border border-white/10"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Our Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/20 rounded-full mb-4">
                  <Mail className="text-amber-400" size={24} />
                </div>
                <h4 className="font-semibold text-white mb-2">Email</h4>
                <a
                  href="mailto:contact@barberzlink.com"
                  className="text-white/70 hover:text-amber-400 transition-colors"
                >
                  contact@barberzlink.com
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/20 rounded-full mb-4">
                  <Phone className="text-amber-400" size={24} />
                </div>
                <h4 className="font-semibold text-white mb-2">Phone</h4>
                <a
                  href="tel:+19043193632"
                  className="text-white/70 hover:text-amber-400 transition-colors"
                >
                  (904) 319-3632
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/20 rounded-full mb-4">
                  <MapPin className="text-amber-400" size={24} />
                </div>
                <h4 className="font-semibold text-white mb-2">Address</h4>
                <p className="text-white/70">
                  716 New Berlin Rd, Ste 15
                  <br />
                  Jacksonville, FL 32218
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
