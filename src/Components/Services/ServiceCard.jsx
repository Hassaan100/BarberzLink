import React from "react";

import { motion } from "motion/react";
import service1 from "@/assets/service1.jpg";
import service2 from "@/assets/service2.jpg";
import service3 from "@/assets/service3.jpg";
import service4 from "@/assets/service4.jpg";
import service5 from "@/assets/service5.jpg";
import service6 from "@/assets/service6.jpg";
import {
  Scissors,
  Store,
  Calendar,
  GraduationCap,
  Briefcase,
  Megaphone,
  ArrowRight,
  Check,
} from "lucide-react";

const ServiceCard = () => {
  const services = [
    {
      icon: Scissors,
      title: "Barber Directory",
      description:
        "Connect with top-rated professional barbers in your area. Build your portfolio and grow your client base.",
      image: service1,
      // color: "from-amber-500 to-orange-600",
      features: [
        "Create professional profile",
        "Showcase your portfolio",
        "Get verified badges",
        "Client reviews and ratings",
        "Direct messaging with clients",
        "Appointment scheduling",
      ],
    },
    {
      icon: Store,
      title: "Barbershop Locator",
      description:
        "Find and list barbershops with premium facilities. Showcase your shop to thousands of potential customers.",
      image: service2,
      // color: "from-blue-500 to-cyan-600",
      features: [
        "List your barbershop",
        "Upload shop photos and videos",
        "Display services and pricing",
        "Manage staff profiles",
        "Online booking system",
        "Business analytics dashboard",
      ],
    },
    {
      icon: Calendar,
      title: "Event Organizer",
      description:
        "Plan, promote, and manage barbering events, competitions, and networking opportunities in the community.",
      image: service3,
      // color: "from-purple-500 to-pink-600",
      features: [
        "Create and promote events",
        "Ticket sales and registration",
        "Event calendar integration",
        "Attendee management",
        "Competition brackets",
        "Live event updates",
      ],
    },
    {
      icon: GraduationCap,
      title: "Barber School",
      description:
        "Access professional training programs, certifications, and continuing education for aspiring and experienced barbers.",
      image: service4,
      // color: "from-green-500 to-emerald-600",
      features: [
        "Online courses and tutorials",
        "Certification programs",
        "Live workshops and webinars",
        "Expert instructors",
        "Skill assessments",
        "Career placement assistance",
      ],
    },
    {
      icon: Briefcase,
      title: "Business Resources",
      description:
        "Essential tools, guides, and resources to manage and grow your barbering business successfully.",
      image: service6,
      // color: "from-red-500 to-rose-600",
      features: [
        "Business plan templates",
        "Financial management tools",
        "Marketing resources",
        "Legal documentation",
        "Inventory management",
        "Client relationship management",
      ],
    },
    {
      icon: Megaphone,
      title: "Product Advertiser",
      description:
        "Promote your grooming products and tools to a targeted audience of professional barbers and enthusiasts.",
      image: service5,
      // color: "from-yellow-500 to-amber-600",
      features: [
        "Product listing and catalog",
        "Targeted advertising campaigns",
        "Performance analytics",
        "Direct sales integration",
        "Brand partnerships",
        "Influencer collaborations",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-neutral-950 to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div className={`${!isEven ? "lg:order-2" : ""}`}>
                  <div className="relative group">
                    <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center z-20 shadow-xl">
                        <Icon className="text-white" size={32} />
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div
                      className={`absolute -bottom-6 ${isEven ? "-right-6" : "-left-6"} w-40 h-40 bg-gradient-to-r from-amber-400 to-amber-600  rounded-full blur-3xl opacity-30`}
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${!isEven ? "lg:order-1" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div
                      className={`inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-600  rounded-full mb-6`}
                    >
                      <Icon className="text-white" size={20} />
                      <span className="text-white font-semibold">
                        Service {index + 1}
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {service.title}
                    </h2>

                    <p className="text-xl text-white/70 mb-8">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + featureIndex * 0.05,
                          }}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`w-6 h-6 bg-linear-to-r from-amber-400 to-amber-600  rounded-full flex items-center justify-center shrink-0`}
                          >
                            <Check className="text-white" size={14} />
                          </div>
                          <span className="text-white/80">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.a
                      href="#download"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      Get Started
                      <ArrowRight size={20} />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
