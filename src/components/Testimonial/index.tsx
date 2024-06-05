'use client'
import { TestimonialList } from "@/lib/constant";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { motion } from "framer-motion";

const Testimonial = () => {
  const startsArray = Array(5).fill(null);

  const itemVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.3, duration: 0.3 },
    }),
  };

  return (
    <div className="lg:container px-5 md:px-10 lg:px-[10rem]">
      <div className="lg:rounded-[40px] rounded-3xl bg-white dark:bg-[#030712] pt-10 pb-28 lg:px-10">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#393E41] dark:text-white md:text-5xl">
          QUOI <br /> SOLOPRENEURS <br /> PENSE?
        </h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
          {TestimonialList.map((item, index) => (
            <motion.div
              variants={itemVariants}
              viewport={{ once: true }}
              initial="offscreen"
              whileInView="onscreen"
              custom={index}
              key={index}
              className="shadow-custom dark:shadow-[#1b1b1b] relative flex flex-col items-center py-10"
            >
              <div className="flex gap-x-2 text-[#FFBC00]">
                {startsArray.map((_, index) => (
                  <GoStarFill key={index} />
                ))}
              </div>
              <Image
                width={50}
                height={50}
                className="mt-5 rounded-full"
                src={item.image}
                alt="Avatar"
              />
              <h3 className="font-semibold uppercase mt-2 font-sans z-10 text-center">
                {item.title}
              </h3>
              <p className="mt-2 md:px-5 text-center text-sm font-light text-[#525456] dark:text-[#ABABAB] 2xl:px-10">
                {item.text}
              </p>
              <FaQuoteLeft className="absolute left-2 bottom-2 text-3xl text-[#FFBC00]" />
              <FaQuoteRight className="absolute bottom-2 right-2 text-3xl text-[#FFBC00]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
