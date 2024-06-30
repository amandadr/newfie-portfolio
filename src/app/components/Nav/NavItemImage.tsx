"use client";

import React from "react";
import Image from "next/image";

type NavItemImageProps = {
  imageUrl: string;
  label: string;
};

const NavItemImage: React.FC<NavItemImageProps> = ({ imageUrl, label }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image
        alt={imageUrl}
        src={imageUrl}
        fill
        sizes="100%"
        className="relative w-full object-cover aspect-square z-1 outline-[0.3em] outline-offset-[-0.3em]"
      />
      <div
        className="absolute max-w-full z-2 flex flex-grow flex-shrink text-wrap text-white text-shadow text-[min(4vw,4vh)] leading-snug font-semibold text-center bg-[rgba(100,100,100,0.35)] rounded-xl px-2"
        style={{
          textShadow: "5px 2px 8px #3D3D3D, -5px -2px 8px #3D3D3D",
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default NavItemImage;
