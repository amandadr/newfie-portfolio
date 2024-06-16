"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterLogo: React.FC = () => {
  return (
    <Link href="/" className="min-w-full min-h-full flex flex-row justify-left">
      <Image
        alt="Logo"
        layout="fill"
        src={"logo.png"}
        objectFit="contain"
        className="h-full aspect-square shadow-2xl"
        />
    </Link>
  );
};

export default FooterLogo;
