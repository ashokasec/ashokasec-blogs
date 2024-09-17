"use client";

import Script from "next/script";
import React from "react";

const Analytics = () => {
  return (
    <>
      <Script
        id="my-script"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-R1VYPM7FHJ"
      ></Script>
      <Script id="my-script-sibling">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-R1VYPM7FHJ');
    `}
      </Script>
    </>
  );
};

export default Analytics;
