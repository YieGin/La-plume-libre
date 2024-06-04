"use client";
import { ServicesData } from "@/lib/constant";
import Link from "next/link";
import React from "react";
import { FaFeatherAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import AnimatedCharacters from "@/utils/AnimatedCharacters";

const Services = () => {
  const itemVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.3, duration: 0.3 },
    }),
  };

  return (
    <div className="mt-10 py-10">
      <div className="lg:container px-5 md:px-10 lg:px-[10rem]">
        <AnimatedCharacters
          className="md:text-4xl text-3xl font-semibold uppercase text-center"
          type="heading1"
          text="What we do"
        />
        <AnimatedCharacters
          className="uppercase font-bold md:text-5xl text-3xl md:leading-[120%] mt-3 text-center"
          type="heading1"
          text="Our services"
        />
        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mt-5">
          {ServicesData.map((item, index) => (
            <motion.div
              variants={itemVariants}
              viewport={{ once: true }}
              initial="offscreen"
              whileInView="onscreen"
              custom={index}
              key={index}
              className={`group shadow-md rounded-xl flex flex-col items-center py-5 px-5 lg:px-10 gap-y-3 ${
                index === 0 || index === 2 || index === 4
                  ? "bg-[#2E2E2E] dark:bg-[#22120f96] text-white dark:hover:bg-white hover:bg-white"
                  : "bg-white dark:bg-[#09111a] text-black hover:bg-[#2E2E2E] dark:hover:bg-[#fff]"
              }`}
            >
              <FaFeatherAlt size={40} color="#b53c2a" />
              <h1
                className={`font-bold text-[1rem] text-center transition-all duration-200 ${
                  index === 0 || index === 2 || index === 4 ? "group-hover:text-black dark:text-white" : "group-hover:text-white dark:text-white dark:group-hover:text-black"
                }`} 
              >
                {item.title}
              </h1>
              <p
                className={`text-center text-[0.9rem] text-muted-foreground transition-all duration-200 ${
                  index === 0 || index === 2 || index === 4 ? "text-[#ababab] group-hover:text-muted-foreground" : "group-hover:text-[#dadada] dark:group-hover:text-muted-foreground"
                }`}
              >
                {item.description}
              </p>
              <div className="flex gap-1 items-center mt-auto text-[#b53c2a]">
                <Link
                  href="/"
                  className="uppercase font-bold cursor-pointer underline"
                >
                  Learn more
                </Link>
                <IoIosArrowRoundForward size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
