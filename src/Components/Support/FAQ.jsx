import React, { useState } from "react";
import { motion } from "motion/react";

import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState("Getting Started");

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I create an account?",
          a: "Download the Barberzlink app from the App Store or Google Play Store, tap 'Sign Up', and follow the on-screen instructions. You can sign up using your email, phone number, or social media accounts.",
        },
        {
          q: "Is Barberzlink free to use?",
          a: "Yes! We offer a free plan with basic features. You can upgrade to Professional or Business plans for advanced features and tools.",
        },
        {
          q: "How do I set up my profile?",
          a: "After creating your account, go to your profile settings and add your information, upload photos of your work, add your skills and certifications, and customize your profile to stand out.",
        },
      ],
    },
    {
      category: "Account & Billing",
      questions: [
        {
          q: "How do I upgrade my plan?",
          a: "Go to Settings > Subscription, select your desired plan, and follow the payment process. Your upgrade will be immediate.",
        },
        {
          q: "Can I cancel my subscription?",
          a: "Yes, you can cancel anytime from your account settings. Your subscription will remain active until the end of your billing period.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, debit cards, PayPal, and various digital payment methods depending on your region.",
        },
      ],
    },
    {
      category: "Features & Tools",
      questions: [
        {
          q: "How does the booking system work?",
          a: "Professional and Business plan users can enable online booking. Clients can view your availability and book appointments directly through your profile.",
        },
        {
          q: "Can I showcase my portfolio?",
          a: "Absolutely! Upload photos and videos of your work to your profile. Free users can upload up to 5 images, while paid plans offer unlimited uploads.",
        },
        {
          q: "How do I get verified?",
          a: "Professional and Business plan subscribers can apply for verification by submitting their license or certification documents through the app.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          q: "The app is not working properly. What should I do?",
          a: "Try these steps: 1) Update to the latest app version, 2) Restart your device, 3) Clear app cache, 4) Reinstall the app. If issues persist, contact support.",
        },
        {
          q: "I forgot my password. How do I reset it?",
          a: "On the login screen, tap 'Forgot Password', enter your email or phone number, and follow the instructions sent to you.",
        },
        {
          q: "How do I delete my account?",
          a: "Go to Settings > Account > Delete Account. Note that this action is permanent and cannot be undone. See our Delete Account Policy for more details.",
        },
      ],
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-6">
            <HelpCircle className="text-amber-400" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-white/70 text-lg">
            Find quick answers to common questions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {faqs.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.category
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                    : "bg-neutral-900 text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {category.category}
              </motion.button>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {faqs
              .find((cat) => cat.category === selectedCategory)
              ?.questions.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-start gap-3">
                    <span className="text-amber-400 flex-shrink-0">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-white/70 pl-7">
                    <span className="text-blue-400 mr-2">A:</span>
                    {faq.a}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
