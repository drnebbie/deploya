"use client";
import { motion } from "framer-motion";
import { spaceGrotesk } from "./navbar/fonts";


const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="h-screen text-center grid place-items-center">
        <div className={spaceGrotesk.className} style={{color:'white'}}>
          <h1>Beyond Web Expectations</h1>
          <br />
          <h1>Launching soon</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
