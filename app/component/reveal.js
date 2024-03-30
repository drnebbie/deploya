// 'use client'
// import React, { useEffect } from 'react';
// import ScrollReveal from 'scrollreveal';

// const RevealTextComponent = ({ children }) => {
//  useEffect(() => {
//     ScrollReveal().reveal('.reveal', {
//       distance: '50px',
//       duration: 1500,
//       easing: 'ease-in-out',
//       origin: 'bottom',
//       reset: true, 
//       viewFactor: 0.2, 
//     });
//  }, []);

//  return <div className="reveal">{children}</div>;
// };

// export default RevealTextComponent;



'use client'
import React, { useEffect, useState } from 'react';

const RevealTextComponent = ({ children }) => {
 const [isClient, setIsClient] = useState(false);

 useEffect(() => {
    // This will run only on the client side
    setIsClient(true);
 }, []);

 useEffect(() => {
    if (isClient) {
      // Dynamically import ScrollReveal only on the client side
      import('scrollreveal').then(ScrollReveal => {
        ScrollReveal.default().reveal('.reveal', {
          distance: '50px',
          duration: 1500,
          easing: 'ease-in-out',
          origin: 'bottom',
          reset: true,
          viewFactor: 0.2,
        });
      });
    }
 }, [isClient]);

 return <div className="reveal">{children}</div>;
};

export default RevealTextComponent;
