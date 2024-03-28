'use client'
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const RevealTextComponent = ({ children }) => {
 useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      duration: 1500,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: true, 
      viewFactor: 0.2, 
    });
 }, []);

 return <div className="reveal">{children}</div>;
};

export default RevealTextComponent;
