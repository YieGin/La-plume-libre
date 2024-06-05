"use client";
import React from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2";

const Involved = () => {
  return (
    <div className="flex flex-wrap gap-5 w-full justify-between px-5 md:px-[5rem] mt-20 pb-20 dark:bg-[#080a14]">
      <div className="flex flex-col gap-y-5">
        <p className="font-bold md:text-[18px] xs:text-[14px] text-[#11142D] dark:text-[#eee]">
          Empowering
        </p>
        <h1 className="bg-gradient-to-r from-[#b53c2a] via-[#000] dark:via-[#b53c2a] to-[#b53c2a] dark:to-[#fff] inline-block text-transparent bg-clip-text font-bold md:text-4xl text-3xl md:leading-[120%]">
          Get Involved
        </h1>
        <p className="font-semibold md:text-[18px] xs:text-[14px] text-[#11142D] dark:text-[#eee]">
          We would love to hear from you. Please reach out to us with any
          questions or inquiries.
        </p>
      </div>
      <div className="flex flex-col gap-y-3 mt-10 font-sans">
        <div className="flex items-center gap-x-2">
          <MdEmail className="text-[#222] md:text-[25px] dark:text-[#fff]" />
          <div>
            <p className="font-bold md:text-[20px] text-[#11142D] dark:text-[#eee]">
              Email
            </p>
            <p className="font-semibold md:text-[20px] text-[#303030] dark:text-[#eee] underline underline-offset-2">
              lalibreplume@hotmail.com
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <MdLocalPhone className="text-[#222] dark:text-[#fff] md:text-[25px]" />
          <div>
            <p className="font-bold md:text-[20px] text-[#11142D] dark:text-[#eee]">
              Phone
            </p>
            <p className="font-semibold md:text-[20px] text-[#303030] dark:text-[#eee] underline underline-offset-2">
              04 76 96 72 39 / 06 83 55 89 83
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <HiBuildingOffice className="text-[#222] dark:text-[#fff] md:text-[25px]" />
          <div>
            <p className="font-bold md:text-[20px] text-[#11142D] dark:text-[#eee]">
              Office
            </p>
            <p className="font-semibold md:text-[20px] text-[#303030] dark:text-[#eee] underline underline-offset-2">
              30, rue Nicolas Charier 38000 Grenoble
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Involved;
