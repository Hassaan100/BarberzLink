import { motion } from "motion/react";
import {
  MessageCircle,
  Mail,
  Phone,
  BookOpen,
  HelpCircle,
  Clock,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";
import Hero from "../Hero";
import Contacts from "./Contacts";
import ContactInfo from "./ContactInfo";
import FAQ from "./FAQ";
import Resources from "./Resources";
import Form from "./Form";

export function Support() {
  return (
    <div>
      <Hero
        title=" How Can We Help?"
        desc=" We're here to support you 24/7. Get answers to your questions or
              reach out to our team."
      />

      <Contacts />
      <ContactInfo />
      <FAQ />
      <Resources />
      <Form />
    </div>
  );
}
