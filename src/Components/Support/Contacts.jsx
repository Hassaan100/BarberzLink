import React from "react";
import { motion } from "motion/react";
import { MessageCircle, Mail, Phone, Clock } from "lucide-react";
const Contacts = () => {
  const contactList = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      action: "Start Chat",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24 hours",
      action: "Send Email",
      link: "mailto:contact@barberzlink.com",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      availability: "Mon-Fri, 9AM-6PM EST",
      action: "Call Now",
      link: "tel:+19043193632",
    },
  ];
  return (
    <section className="py-16 bg-gradient-to-b from-neutral-950 to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Contact Support
            </span>
          </h2>
          <p className="text-white/70 text-lg">
            Choose your preferred way to get in touch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactList.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-2xl p-8 border border-white/10 hover:border-amber-500/50 transition-all text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-6`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {channel.title}
                </h3>
                <p className="text-white/70 mb-4">{channel.description}</p>
                <div className="flex items-center justify-center gap-2 text-amber-400 mb-6">
                  <Clock size={16} />
                  <span className="text-sm">{channel.availability}</span>
                </div>
                <motion.a
                  href={channel.link || "#contact-form"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-block px-6 py-3 bg-gradient-to-r ${channel.color} rounded-full font-semibold hover:shadow-lg transition-all`}
                >
                  {channel.action}
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
