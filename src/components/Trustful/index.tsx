"use client";
import { TrustfulData } from "@/lib/constant";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Trustful = () => {
  const itemVariants = {
    offscreen: { opacity: 0, x: 100 },
    onscreen: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 0.5 },
    }),
  };
  const itemVariantsLeft = {
    offscreen: { opacity: 0, x: -100 },
    onscreen: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 0.5 },
    }),
  };

  return (
    <div className="lg:container px-5 md:px-10 lg:px-[10rem] mt-10 flex justify-between items-center md:flex-row flex-col w-full gap-10 overflow-hidden">
      <motion.div
        variants={itemVariantsLeft}
        viewport={{ once: true }}
        initial="offscreen"
        whileInView="onscreen"
        className="md:w-1/2 w-full"
      >
        <Image
          className="w-full h-[600px] rounded-md object-cover"
          alt="Trustful Image"
          src="/assets/images/Trustful-img.png"
          width={1000}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={itemVariants}
        viewport={{ once: true }}
        initial="offscreen"
        whileInView="onscreen"
        className="md:w-1/2 flex flex-col gap-y-5"
      >
        {TrustfulData.map((item, index) => (
          <div key={index}>
            <h1 className="bg-gradient-to-r from-[#b53c2a] via-[#000] dark:via-[#b53c2a] to-[#b53c2a] dark:to-[#fff] inline-block text-transparent bg-clip-text font-bold text-2xl md:leading-[120%]">
              {item.title}
            </h1>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Trustful;
