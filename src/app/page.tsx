import Companies from "@/components/Companies";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Trustful from "@/components/Trustful";
import React from "react";

const Main = () => {
  return (
    <div className="pb-52">
      <Hero />
      <Companies />
      <Services />
      <Trustful />
      <Testimonial />
    </div>
  );
};

export default Main;
