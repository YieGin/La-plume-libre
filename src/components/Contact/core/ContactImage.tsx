import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactImage = () => {

  const itemVariants = {
    offscreen: { opacity: 0, x: 100 },
    onscreen: () => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    }),
  };


  return (
    <motion.div
      variants={itemVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="w-1/2 relative lg:block hidden"
    >
      <Image
        className="w-full h-full object-cover rounded-sm absolute"
        src={"/assets/images/contactImg.png"}
        width={2000}
        height={2000}
        alt="Get in tou"
      />
    </motion.div>
  );
};

export default ContactImage;
