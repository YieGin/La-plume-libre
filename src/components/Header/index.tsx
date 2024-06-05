"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/utils/ModeToggle";
import { Logo } from "../../../public/assets";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname()
  const isHomePage = pathname === "/"; 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > window.innerHeight);
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isHomePage]);

  return (
    <nav
      className={`fixed top-0 z-10 w-full duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-white dark:bg-transparent dark:backdrop-blur-[100px]"
            : "bg-transparent text-white"
          : "bg-white dark:bg-transparent dark:backdrop-blur-[100px]"
      }`}
    >
      <div
        className={`sticky top-3 right-0 z-40 flex h-[60px] items-center justify-between px-8 shadow-sm saturate-100`}
      >
        <div className="flex items-center gap-2 text-black dark:text-white">
          <ModeToggle />
        </div>
        <Link href="/">
          <Logo aria-label="Home" className="dark:text-white w-[60px] h-[60px]" />
        </Link>
        <div className="flex items-center gap-5">
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
