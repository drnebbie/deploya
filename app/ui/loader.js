"use client";
import React, { useState, useEffect } from "react";

const Loader = () => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    // Fade in
    setOpacity(1);

    // Fade out after 3 seconds
    const timer = setTimeout(() => {
      setOpacity(0);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-transparent h-screen grid place-items-center ">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Loader;
