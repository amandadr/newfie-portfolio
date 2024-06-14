"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
import FooterLogo from "components/FooterLogo";
import FooterNav from "components/FooterNav";

interface FooterProps {
  imageUrl?: string;
}

const Footer = forwardRef<HTMLDivElement, FooterProps>(({ imageUrl }, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="Footer relative z-1 flex flex-row justify-between items-center bg-dark text-white h-[20vh] max-h-[25em] w-full"
    >
      <Image
        alt="Background"
        src={imageUrl || "green_gardens.jpeg"}
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full z-[-1]"
      />
      <div
      className="h-[50%] max-w-[50%] bg-gray-300 flex justify-center items-center ml-[2%]"
      >
        <FooterLogo />
      </div>
      <div
      className="h-[90%] w-[35%] max-w-[50%] flex flex-col items-end justify-around mr-[2%] mb-[2%]"
      >
        <FooterNav />
        <div
          className="text-white text-lg font-bold text-center mt-[5%] bg-[rgba(50,50,50,0.45)] rounded-[10px] px-[3%]"
        >
          © {currentYear} Amanda Roy
        </div>
      </div>
    </footer>
  );
});

export default Footer;
