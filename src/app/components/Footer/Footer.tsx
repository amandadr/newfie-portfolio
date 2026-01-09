"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
import FooterLogo from "components/Footer/FooterLogo";
import FooterNav from "components/Footer/FooterNav";
import FooterSignature from "components/Footer/FooterSignature";

interface FooterProps {
  imageUrl?: string;
}

const Footer = forwardRef<HTMLDivElement, FooterProps>(({ imageUrl }, ref) => {
  const defaultImage =
    "green_gardens.jpeg";
  // Ensure we always have a valid image source
  const imageSrc = imageUrl || defaultImage;

  return (
    <footer
      ref={ref}
      className="Footer relative z-1 flex flex-row justify-between items-center text-white h-[20vh] max-h-[25em] w-full"
    >
      <Image
        alt="Background"
        src={imageSrc}
        fill
        sizes="100vw"
        className="absolute object-cover top-0 left-0 w-full h-full z-[0]"
      />
      <div className="relative aspect-square flex min-h-[50%] max-h-[50%] max-w-[50%] bg-gray-300 ml-[1.5em]">
        <FooterLogo />
      </div>
      <div className="relative h-[90%] w-[40%] max-w-[50%] flex flex-col items-end justify-around mr-[1em]">
        <FooterNav />
        <FooterSignature />
      </div>
    </footer>
  );
});

export default Footer;
