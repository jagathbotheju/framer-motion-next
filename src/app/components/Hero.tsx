"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "smooth" },
    },
  };

  const image = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "smooth" } },
  };

  return (
    <div className="pt-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="flex flex-col items-center justify-between">
          <motion.h1
            variants={item}
            className="text-center text-9xl pb-2 max-lg:text-7xl max-md:text-5xl leading-snug"
          >
            Feel the Rhythm of
          </motion.h1>
          <motion.p
            variants={item}
            className="text-center text-9xl pb-2 max-lg:text-7xl max-md:text-5xl leading-snug"
          >
            Your Heart&apos;s Music
          </motion.p>
          <motion.p
            variants={item}
            className="text-xl text-center w-10/12 mx-auto tracking-widest text-neutral-400 max-lg:text-base max-md:text-sm"
          >
            The biggest, extraordinary and spread out K-Pop music festival all
            around the world, in cooperation with all the famous k-pop industry
            agencies in korea and other outstanding talents
          </motion.p>
        </div>
      </motion.div>

      <div className="mt-10">
        <div className="p-2 relative h-[500px] w-full">
          <motion.div
            initial={{ y: 400, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "keyframes" }}
          >
            <Image
              className="w-full lg:h-[700px] md:h-[500px] h-[300px] object-cover object-top opacity-100"
              alt="hero"
              fill
              src="/images/image4.webp"
            />
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 1.5, delayChildren: 0.21 }}
            viewport={{ once: true }}
          >
            <motion.span
              variants={image}
              className="absolute top-4 left-4 lg:text-7x text-4xl"
            >
              Aespa
            </motion.span>
            <motion.span
              variants={image}
              className="absolute bottom-8 left-4 lg:text-xl md:text-base text-sm max-sm:hidden"
            >
              Aespa is a south korean girl group formed by Entertainment
            </motion.span>
            <motion.span
              variants={image}
              className="absolute top-4 right-4 lg:text-xl md:text-base text-sm"
            >
              Go and buy the Tickets
            </motion.span>
            <motion.span
              variants={image}
              className="absolute right-4 bottom-4 lg:text-xl md:text-base text-sm"
            >
              Seoul December 12
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
