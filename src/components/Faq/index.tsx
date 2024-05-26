import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FaqList } from "@/lib/constant";

const Faq = () => {
  return (
    <div className="lg:container px-5 md:px-10 lg:px-[10rem] mt-10 lg:mt-20">
      <h1 className="bg-gradient-to-r from-[#b53c2a] via-[#000] to-[#b53c2a] inline-block text-transparent bg-clip-text font-bold md:text-5xl text-3xl md:leading-[120%]">
        Préparer Votre Visite
      </h1>
      <p className="lg:w-[70%] mt-5">
        Faire notarier un document est simple. Apportez simplement vos documents
        nécessaires, vérifiez votre identité et vous serez connecté à un notaire
        pour une rencontre en ligne. Les notaires du réseau La Plume Libre sont
        toujours disponibles et prêts à vous aider.
      </p>
      <div className="flex mt-10 w-full gap-20">
        <div className="lg:w-[70%] flex flex-col gap-y-5">
          {FaqList.map((item, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold text-left text-base">{item.title}</AccordionTrigger>
                <AccordionContent>
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="lg:block hidden">
          <Image
            className="h-[500px] object-cover rounded-md"
            src="/assets/images/hero.png"
            width="700"
            height="700"
            alt="Image Héro"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
