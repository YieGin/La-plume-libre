import { TestimonialList } from "@/lib/constant";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";

const Testimonial = () => {
  const startsArray = Array(5).fill(null);

  return (
    <div className="lg:container px-5 md:px-10 lg:px-[10rem]">
      <div className="lg:rounded-[40px] rounded-3xl bg-white pt-10 pb-28 lg:px-10">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#393E41] md:text-5xl">
        QUOI <br /> SOLOPRENEURS <br /> PENSE?
        </h1>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-2 lg:gap-5">
          {TestimonialList.map((item, index) => (
            <div
              key={index}
              className="shadow-custom relative md:mt-10 flex flex-col items-center py-10 md:w-[420px] "
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
              <h3 className="font-semibold uppercase mt-2 font-sans z-10">{item.title}</h3>
              <p className="mt-2 px-5 text-center text-sm font-light text-[#525456] lg:px-10">
                {item.text}
              </p>
              <FaQuoteLeft className="absolute left-2 top-32 text-3xl text-[#FFBC00]" />
              <FaQuoteRight className="absolute bottom-2 right-2 text-3xl text-[#FFBC00]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;