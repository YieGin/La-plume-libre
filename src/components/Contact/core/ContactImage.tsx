import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";

const ContactImage = () => {
  const container = useRef<HTMLDivElement>(null);
  const paths = useRef<(SVGTextPathElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const itemVariants = {
    offscreen: { opacity: 0, x: 100 },
    onscreen: () => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    }),
  };

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        if (path) {
          path.setAttribute("startOffset", `${-60 + i * 60 + e * 60}%`);
        }
      });
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      variants={itemVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="w-1/2 relative lg:block hidden"
    >
      <Image
        className="w-full h-full object-cover rounded-sm absolute brightness-75"
        src={"/assets/images/hero.png"}
        width={2000}
        height={2000}
        alt="Get in tou"
      />
    </motion.div>
  );
};

export default ContactImage;
