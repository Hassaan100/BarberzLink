import { motion } from "motion/react";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Globe,
  Zap,
} from "lucide-react";
import CTA from "../CTA";
import Hero from "../Hero";
import Story from "./Story";
import Values from "./Values";
import Timeline from "./Timeline";
import Mission from "./Mission";
import Stats from "./Stats";
import Team from "./Team";

export function About() {
  return (
    <div className="bg-black ">
      <Hero
        title="About Barberzlink"
        desc="The nationwide professional platform exclusively for the barber industry. Hire. Connect. Grow."
      />
      <Story />
      <Mission />
      <Values />
      <Timeline />
      <Stats />
      <Team />
      <CTA
        title="Join Our Community Today"
        desc="Be part of the nation's leading platform for barber professionals"
        btn1="Get Started Free"
        btn2="View Pricing"
      />
    </div>
  );
}
