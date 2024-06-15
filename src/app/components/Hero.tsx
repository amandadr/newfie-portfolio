"use client";
import React from "react";
import Image from "next/image";

interface HeroProps {
  imageUrl?: string;
  header?: string;
}

const Hero: React.FC<HeroProps> = (props) => {
  const { imageUrl, header } = props;
  return (
    <div
      className="Hero relative w-[100vw] h-[100vh] flex items-center justify-center"
    >
      <Image
        alt="Hero"
        src={imageUrl || "coppermine_1.jpeg"}
        fill
        className="flex items-center justify-center w-full h-full z-1 outline-[0.5em] inset-[rgba(70, 70, 70, 0.1)] outline-offset-[-0.5em]"
      />
      <div
      className="absolute flex items-center justify-center w-full h-full z-2"
      >
        <h1
          className="text-3xl text-center text-white font-medium shadow-lg bg-black bg-opacity-15 p-2 px-3 rounded-2xl"
        >
          {header || "Welcome to my portfolio!"}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
