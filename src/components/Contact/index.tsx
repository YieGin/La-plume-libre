"use client";
import React from "react";
import FormSection from "./core/FormSection";
import ContactImage from "./core/ContactImage";

const Contact = () => {
  return (
    <div className="bg-white py-20">
      <div className="container flex md:flex-row flex-col justify-between w-full gap-10 overflow-hidden">
        <FormSection />
        <ContactImage />
      </div>
    </div>
  );
};

export default Contact;
