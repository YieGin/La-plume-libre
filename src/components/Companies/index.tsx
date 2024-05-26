import { Logos_companies } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <div className="bg-[#f9f9f7] w-full h-40 mt-10 flex items-center justify-center">
      <div className="flex items-center justify-between lg:container px-5 md:px-10 lg:px-[10rem] gap-5">
        {Logos_companies.map((item, index) => (
          <div key={index}>
            <Image
              className="object-cover"
              src={item.image}
              alt="Logos"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
