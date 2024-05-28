"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MobileNav from "./core/MobileNav";
import { ModeToggle } from "@/utils/ModeToggle";
import { Logo } from "../../../public/assets";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-10 w-full duration-300 ${
        isScrolled ? "bg-white dark:bg-transparent dark:backdrop-blur-[100px]" : "bg-transparent text-white"
      }`}
    >
      <div
        className={`sticky top-3 right-0 z-40 flex h-[60px] items-center justify-between px-8 shadow-sm saturate-100`}
      >
        <div className="hidden lg:flex items-center gap-2 text-black dark:text-white">
          <ModeToggle />
        </div>
        <Link href="/">
          <Logo
            aria-label="Home"
            className="dark:text-white w-[60px] h-[60px]"
          />
        </Link>
        <div className="flex items-center gap-5">
          <MobileNav isScrolled={isScrolled} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
