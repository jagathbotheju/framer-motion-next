"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "./Container";

const Navbar = () => {
  const container = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <Container>
      <div className="mt-5">
        <div>
          <div className="flex flex-row items-center justify-between">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Image
                alt="logo"
                className="w-[196px] h-auto bg-pink-500"
                src="/images/logo.png"
                width={196}
                height={20}
                priority
              />
            </motion.div>

            {/* menu */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={container}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-6 max-md:hidden flex-row tracking-widest text-2xl">
                <Link href="">Home</Link>
                <Link href="">Performance</Link>
                <Link href="">Booking</Link>
                <Link href="">Store</Link>
                <Link href="">About Us</Link>
              </div>
            </motion.div>

            {/* sign in */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={container}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <button className="text-black bg-white px-5 py-2">Sign In</button>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
