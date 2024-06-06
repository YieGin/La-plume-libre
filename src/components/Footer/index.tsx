import Link from "next/link";
import React from "react";
import { Logo } from "../../../public/assets";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2";
import { linkData } from "@/lib/constant";

const Footer = () => {
  return (
    <div className="lg:container px-5 md:px-10 lg:px-[10rem] flex items-center justify-center w-full mt-20 mb-10">
      <div className="relative mx-auto mb-6 flex flex-col rounded-2xl p-8 shadow-sm saturate-100 backdrop-blur-[10px] dark:bg-gradient-to-br bg-gradient-to-bl dark:from-[#030712] dark:to-[#242731] from-[#e0e0e0] to-[#eeeeee] lg:max-w-4xl w-full">
        <div className="flex gap-2 items-center relative right-5">
          <Logo className="dark:text-white text-black w-[120px] h-[120px]" />
        </div>
        <div className="flex justify-between flex-col md:flex-row lg:gap-52 lg:justify-normal mt-5">
          <div className="flex flex-col gap-y-3 font-sans">
            <div className="flex items-center gap-x-2">
              <MdEmail className="text-[#222] md:text-[25px] dark:text-[#fff]" />
              <div>
                <p className="font-bold text-[#11142D] dark:text-[#eee]">
                  Email
                </p>
                <p className="font-semibold underline underline-offset-2 text-muted-foreground">
                  lalibreplume@hotmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <MdLocalPhone className="text-[#222] dark:text-[#fff] md:text-[25px]" />
              <div>
                <p className="font-bold text-[#11142D] dark:text-[#eee]">
                  Phone
                </p>
                <p className="font-semibold underline underline-offset-2 text-muted-foreground">
                  04 76 96 72 39 / 06 83 55 89 83
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <HiBuildingOffice className="text-[#222] dark:text-[#fff] md:text-[25px]" />
              <div>
                <p className="font-bold text-[#11142D] dark:text-[#eee]">
                  Office
                </p>
                <p className="font-semibold underline underline-offset-2 text-muted-foreground">
                  30, rue Nicolas Charier 38000 Grenoble
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:gap-10 flex-col md:flex-row">
            {linkData.map((section) => (
              <div key={section.id} className="space-y-4 flex flex-col">
                {section.links.map((link) =>
                  section.id === "social" ? (
                    <div key={link.text} className="flex flex-col mt-5 lg:mt-0">
                      <Link
                        href={link.href}
                        target="_blank"
                        className="text-[0.8rem] text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer"
                      >
                        {link.text}
                      </Link>
                    </div>
                  ) : (
                    <Link
                      key={link.text}
                      href={link.href}
                      className="text-[0.8rem] text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer mt-5 lg:mt-0"
                    >
                      {link.text}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="text-[0.8rem] mt-10">
          © Copyright 2024 – La Plume Libre. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default Footer;
