"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileNav from "./core/MobileNav";
import { ModeToggle } from "@/utils/ModeToggle";
import { Logo } from "../../../public/assets";

const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="lg:container">
      <div
        className={`${
          isActive("/projects")
            ? "bg-transparent backdrop-blur-[100px]"
            : "bg-white dark:bg-transparent backdrop-blur-[1000px]"
        } sticky backdrop-filter backdrop-blur-lg top-3 right-0 z-40 flex h-[60px] items-center justify-between rounded-2xl border-b-2 px-8 shadow-sm saturate-100`}
      >
        <div className="hidden lg:flex items-center gap-2">
          <ModeToggle />
        </div>
        <Link href="/">
          <Logo
            aria-label="Home"
            className="dark:text-white w-[60px] h-[60px]"
          />
        </Link>
        <div className="flex items-center gap-5">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Header;
