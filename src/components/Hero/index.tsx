import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full px-5 md:px-10 lg:px-[10rem] lg:container md:mt-20 gap-10 lg:gap-x-20">
      <div className="md:w-1/2 lg:mt-14">
        <h1 className="bg-gradient-to-r from-[#b53c2a] via-[#000] to-[#b53c2a] inline-block text-transparent bg-clip-text font-bold md:text-5xl text-3xl md:leading-[120%]">
          Notarisez en ligne. <br /> Partout. <br /> À tout moment.
        </h1>
        <p className="mt-5">
          Avec la notarisation en ligne, vous n'avez pas besoin de traverser la
          ville pour trouver un notaire. Téléchargez votre document, prouve
          votre identité et rencontrez instantanément un notaire en ligne.
        </p>
        <Button className="mt-5 py-7">Notarisez un document maintenant</Button>
      </div>
      <Image
        className="md:w-1/2 h-[500px] object-cover rounded-md"
        src="/assets/images/hero.png"
        width="700"
        height="700"
        alt="Image Héro"
      />
    </div>
  );
};

export default Hero;
