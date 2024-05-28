import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "../.././ui/sheet";
import { Logo } from "../../../../public/assets";
import { BiMenuAltRight } from "react-icons/bi";
import MobileNavLinks from "./MobileNavLinks";

interface MobileNavProps {
  isScrolled: boolean;
}

const MobileNav = ({ isScrolled }: MobileNavProps) => {
  return (
    <Sheet>
      <SheetTrigger aria-label="Open navigation menu">
        <BiMenuAltRight
          className={`${
            isScrolled
              ? "text-black dark:text-white text-3xl"
              : "text-white text-3xl"
          }`}
        />
      </SheetTrigger>
      <SheetContent className="space-y-3 w-full">
        <SheetDescription className="flex flex-col gap-4">
          <Logo className="dark:text-white text-black w-[60px] h-[60px]" />
          <MobileNavLinks />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
