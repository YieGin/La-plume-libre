"use client";
import React from "react";
import FormSection from "./core/FormSection";
import ContactImage from "./core/ContactImage";


const Contact = () => {
  return (
    <div className="bg-white dark:bg-[#030712] py-20">
      <div className="lg:container px-5 md:px-10 lg:px-[10rem] flex md:flex-row flex-col justify-between w-full gap-10 overflow-hidden">
        <FormSection />
        <ContactImage />
      </div>
    </div>
  );
};

export default Contact;
