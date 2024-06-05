"use client";
import React from "react";
import Link from "next/link";
import { Logo } from "../../../public/assets";
import { ModeToggle } from "@/utils/ModeToggle";

const Header = () => {
  return (
    <nav className="bg-white dark:bg-transparent backdrop-blur-[1000px] sticky top-3 right-0 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl border-b-2 px-8 shadow-sm saturate-100">
      <div className="  flex items-center gap-5">
        <ModeToggle />
      </div>
      <Link className="flex items-center" href="/">
        <Logo
          aria-label="Home"
          className="text-[#000] dark:text-white w-[50px] h-[40px] md:absolute left-1/2 right-1/2"
        />
      </Link> 
      <Link className="text md:text-base text-sm py-2 md:w-32 md:border-2 rounded-3xl text-center" href="/contact">Contact</Link>
    </nav>
  );
};

export default Header;
