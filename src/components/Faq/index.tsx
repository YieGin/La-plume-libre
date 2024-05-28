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
      <p className="mt-5 text-[1.1rem]">
        Faire notarier un document est simple. Apportez simplement vos documents
        nécessaires, vérifiez votre identité et vous serez connecté à un notaire
        pour une rencontre en ligne. Les notaires du réseau La Plume Libre sont
        toujours disponibles et prêts à vous aider.
      </p>
      <div className="flex mt-10 w-full gap-20">
        <div className="flex flex-col gap-y-5 w-full">
          {FaqList.map((item, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-medium text-left text-[1.4rem]">{item.title}</AccordionTrigger>
                <AccordionContent className="text-[1.1rem]">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
