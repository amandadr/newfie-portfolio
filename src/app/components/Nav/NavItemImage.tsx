"use client";

import React from "react";
import Image from "next/image";

type NavItemImageProps = {
  imageUrl: string;
  label: string;
};

const NavItemImage: React.FC<NavItemImageProps> = ({ imageUrl, label }) => {
  return (
    <>
      <Image
        alt={imageUrl}
        src={imageUrl}
        fill
        sizes="100%"
        className="relative w-full object-cover aspect-square z-1 outline-[0.3em] outline-offset-[-0.3em]"
      />
      <div
        className="absolute z-2 text-wrap text-white text-shadow text-xl font-semibold text-center bg-[rgba(100,100,100,0.35)] rounded-xl px-2"
        style={{
          textShadow: "5px 2px 8px #3D3D3D, -5px -2px 8px #3D3D3D",
        }}
      >
        {label}
      </div>
    </>
  );
};

export default NavItemImage;
