import Companies from "@/components/Companies";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import React from "react";

const Main = () => {
  return (
    <div className="pb-52">
      <Hero />
      <Companies />
      <Faq />
    </div>
  );
};

export default Main;
