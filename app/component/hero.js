"use client";
import React from "react";
import { motion } from "framer-motion";
import { spaceGrotesk } from "../fonts";
import Arrow from "./arrow/arrow";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative h-screen text-center flex  flex-col justify-center items-center ">
        <div className="details details flex flex-col justify-center items-center">
          <div className={spaceGrotesk.className} style={{ color: "white" }}>
            <h1>Beyond Web Expectations</h1>
            <br />
            <h1>Launching soon</h1>
          </div>
        
        </div>
        <div className="absolute bottom-20">
        <Arrow />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
