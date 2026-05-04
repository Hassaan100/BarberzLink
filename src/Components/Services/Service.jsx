import React from "react";
import ServiceCard from "./ServiceCard";
import CTA from "../CTA";
import Hero from "../Hero";

const Service = () => {
  return (
    <div>
      <Hero
        title="Our Services"
        desc="Comprehensive solutions designed exclusively for the barbering industry. Everything you need to succeed in one platform."
      />
      <ServiceCard />
      <CTA
        title="Ready to Access All Services?"
        desc="Download the Barberzlink app today and unlock the full potential of our platform."
        btn1="Download Now"
        btn2="View Pricing"
      />
    </div>
  );
};

export default Service;
