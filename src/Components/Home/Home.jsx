import React from "react";
import HeroSection from "./HeroSection";
import WhoItsFor from "./WhoItsFor";
import HowItWorks from "./HowItWorks";
import WhatYouCanDo from "./WhatYouCanDo,";
import WhyBarberzLink from "./WhyBarberzLink";
import SMSConsent from "./SMSConsent";
import ReadyToElevate from "./ReadyToElevate";
import WhatBarberz from "./WhatBarberz";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhatBarberz />
      <WhoItsFor />
      <HowItWorks />
      <WhatYouCanDo />
      <WhyBarberzLink />
      <SMSConsent />
      <ReadyToElevate />
    </div>
  );
};

export default Home;
