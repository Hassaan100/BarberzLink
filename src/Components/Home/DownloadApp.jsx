import React from "react";

import { motion } from "motion/react";
import { Smartphone, Apple } from "lucide-react";
import logo from "@/assets/logo.png";

const DownloadApp = () => {
  return (
    <section
      id="download"
      className="py-24 bg-linear-to-b from-neutral-950 to-black"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Download Our App
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get the Barberzlink mobile app and take your business on the go.
              Available now on iOS and Android.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Manage your profile and appointments",
                "Connect with clients instantly",
                "Access exclusive features",
                "Stay updated with real-time notifications",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white/80"
                >
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all"
              >
                <Smartphone size={24} />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </motion.a>

              <motion.a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all"
              >
                <Apple size={24} />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              <div className="relative bg-linear-to-br from-neutral-800 to-neutral-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden border-8 border-black">
                  <div className="h-6 bg-black relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzc2MTk0OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Barberzlink App"
                      className="w-full h-auto"
                    />
                    <div className="absolute top-8 left-0 right-0 flex justify-center">
                      <img
                        src={logo}
                        alt="Barberzlink"
                        className="h-16 w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-linear-to-br from-amber-500 to-amber-600 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
