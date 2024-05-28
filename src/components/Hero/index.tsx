import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col relative md:flex-row w-full px-5 gap-0 lg:gap-x-20 h-screen bg-black">
      <Image
        className="absolute left-0 right-0 top-0 w-full h-screen object-cover"
        src="/assets/images/hero.png"
        width={3000}
        height={2000}
        alt="Image Héro"
      />
    </div>
  );
};

export default Hero;
