"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Section = () => {
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
    hidden: { opacity: 0, y: 30, scale: 1.1 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "smooth" } },
  };

  return (
    <div className="mt-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        className="md:grid grid-cols-2 gap-x-7 space-y-10"
      >
        {/* 1-row */}
        <motion.img
          variants={image}
          whileInView="show"
          src="/images/redvelvet.jpg"
          alt=""
        />
        <div className="max-md:hidden text-4xl md:text-7xl text-neutral-800 flex items-center font-extrabold">
          ELEGANT
        </div>

        {/* 2-row */}
        <motion.div variants={item}>
          <h1 className="text-4xl mt-7 mb-4 max-sm:text-3xl">RED VELVET</h1>
          <p className="text-2xl text-neutral-500 max-sm:text-xl">
            SM Entertainment
          </p>
          <p className="text-neutral-500 mt-3 max-sm:text-sm">
            Red Velvet is a south korean girl group formed by SM entertainments
            in 2014 and consists of five member, namely Irene, Seulgi, Wendy,
            Yeri and Joy. They started their career n August 1, 2014 with the
            release f the digital single &apos;Happiness&apos;
          </p>
          <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
            Show more
          </button>
        </motion.div>
        <motion.img
          variants={image}
          className="md:mt-[40px]"
          src="/images/blackpink.jpg"
          alt=""
        />

        {/* 3-row */}
        <div className="text-4xl md:text-7xl text-neutral-800 flex items-center mb-20 font-extrabold">
          EVENTS
        </div>
        <motion.div variants={item}>
          <h1 className="text-4xl mt-7 mb-4 max-sm:text-3xl">BLACK PINK</h1>
          <p className="text-2xl text-neutral-500 max-sm:text-xl">
            SM Entertainment
          </p>
          <p className="text-neutral-500 mt-3 max-sm:text-sm">
            Red Velvet is a south korean girl group formed by SM entertainments
            in 2014 and consists of five member, namely Irene, Seulgi, Wendy,
            Yeri and Joy. They started their career n August 1, 2014 with the
            release f the digital single &apos;Happiness&apos;
          </p>
          <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
            Show more
          </button>
        </motion.div>

        {/* 4-row */}
        <motion.img
          variants={image}
          className="md:mt-[-100px] opacity-80"
          src="/images/twice.jpg"
          alt=""
        />
        <div className="max-md:hidden text-4xl md:text-7xl text-neutral-800 flex items-center justify-center font-extrabold">
          ELEGANT EVENTS
        </div>

        {/* 5-row */}
        <motion.div variants={item}>
          <h1 className=" text-4xl mt-7 mb-4 max-sm:text-3xl">TWICE</h1>
          <p className="text-2xl text-neutral-500 max-sm:text-xl">
            SM Entertainment
          </p>
          <p className="text-neutral-500 mt-3 max-sm:text-sm">
            Red Velvet is a south korean girl group formed by SM entertainments
            in 2014 and consists of five member, namely Irene, Seulgi, Wendy,
            Yeri and Joy. They started their career n August 1, 2014 with the
            release f the digital single &apos;Happiness&apos;
          </p>
          <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
            Show more
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section;
