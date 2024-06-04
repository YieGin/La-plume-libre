import Companies from "@/components/Companies";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Involved from "@/components/Involved";
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
      <div className="bg-[#F5F5F5] pt-20 mt-20">
        <Testimonial />
        <Faq />
        <Contact />
        <Involved />
      </div>
    </div>
  );
};

export default Main;
