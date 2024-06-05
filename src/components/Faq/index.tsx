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
    <div className="bg-white dark:bg-[#030712] mt-10 lg:mt-20 py-10">
      <div className="lg:container px-5 md:px-10 lg:px-[10rem]">
        <h1 className="bg-gradient-to-r from-[#b53c2a] via-[#000] dark:via-[#b53c2a] to-[#b53c2a] dark:to-[#fff] inline-block text-transparent bg-clip-text font-bold md:text-5xl text-3xl md:leading-[120%]">
          Préparer Votre Visite
        </h1>
        <p className="mt-5 text-[1.1rem] dark:text-muted-foreground">
          Faire notarier un document est simple. Apportez simplement vos
          documents nécessaires, vérifiez votre identité et vous serez connecté
          à un notaire pour une rencontre en ligne. Les notaires du réseau La
          Plume Libre sont toujours disponibles et prêts à vous aider.
        </p>
        <div className="flex mt-10 w-full gap-20">
          <div className="flex flex-col gap-y-5 w-full">
            {FaqList.map((item, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-semibold text-left md:text-[1.3rem]">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="md:text-[1.1rem] w-[80%] text-muted-foreground">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
