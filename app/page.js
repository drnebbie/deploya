"use client";
import React, { useState, useEffect } from "react";
import Loader from "./ui/loader";
import Hero from "./component/hero";
import Navbar from "./component/navbar/navbar";
import RevealTextComponent from "./component/reveal";
import Countdown from "./component/countdown";
import Banner from "./component/banner";
import ContactForm from "./component/contactForm";

import StickyBanner from "./component/stickyBanner";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay with setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000); // Delay of 3 seconds

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <Navbar />
      <div className="bg"></div>
      <Hero />
      <RevealTextComponent>
        <div className="my-20 text-center text-xl ">
          <h1>Launch day</h1>
        </div>
      </RevealTextComponent>

      <RevealTextComponent>
        <Countdown />
      </RevealTextComponent>

      <RevealTextComponent>
        {/* <Banner /> */}
        <ContactForm />
      </RevealTextComponent>

      {/* <BackgroundBeamsDemo /> */}
      <StickyBanner />

   

      
    </main>
  );
}
