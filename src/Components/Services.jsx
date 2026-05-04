import { motion } from "motion/react";
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
import { Link } from "react-router";

const services = [
  {
    icon: Scissors,
    title: "Barber Directory",
    description:
      "Connect with top-rated professional barbers in your area. Build your portfolio and grow your client base.",
    image:
      "https://images.unsplash.com/photo-1768363446104-b8a0c1716600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NzYyMzU1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-amber-500 to-orange-600",
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
    image:
      "https://images.unsplash.com/photo-1754294437661-129b86f868ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXJzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc2MjAxNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-blue-500 to-cyan-600",
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
    image:
      "https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3NzYyMDUwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-purple-500 to-pink-600",
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
    image:
      "https://images.unsplash.com/photo-1543697506-6729425f7265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjB0cmFpbmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzYyNTg1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-green-500 to-emerald-600",
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
    image:
      "https://images.unsplash.com/photo-1590098563686-06ab8778a6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHJlc291cmNlcyUyMGxhcHRvcHxlbnwxfHx8fDE3NzYyNTg1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-red-500 to-rose-600",
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
    image:
      "https://images.unsplash.com/photo-1775126250999-806ca8419dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9vbWluZyUyMHByb2R1Y3RzJTIwYWR2ZXJ0aXNpbmd8ZW58MXx8fHwxNzc2MjU4NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-yellow-500 to-amber-600",
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

export function Services() {
  return (
    <div className="bg-black pt-28 pb-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-black to-neutral-950">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Comprehensive solutions designed exclusively for the barbering
              industry. Everything you need to succeed in one platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
                        <div
                          className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center z-20 shadow-xl`}
                        >
                          <Icon className="text-white" size={32} />
                        </div>
                      </div>
                      {/* Decorative Elements */}
                      <div
                        className={`absolute -bottom-6 ${isEven ? "-right-6" : "-left-6"} w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-30`}
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
                        className={`inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r ${service.color} rounded-full mb-6`}
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
                              className={`w-6 h-6 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center flex-shrink-0`}
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
                        className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${service.color} rounded-full font-semibold shadow-lg hover:shadow-xl transition-all`}
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-neutral-950">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-r from-amber-600 to-amber-500 rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Access All Services?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Download the Barberzlink app today and unlock the full potential
                of our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#download"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-amber-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
                >
                  Download Now
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document
                      .querySelector('a[href="/pricing"]')
                      ?.dispatchEvent(new MouseEvent("click"))
                  }
                  className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
                >
                  <Link to="/pricing">View Pricing</Link>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
