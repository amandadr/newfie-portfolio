"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterLogo: React.FC = () => {
  return (
    <Link href="/" className="relative min-w-full min-h-full flex flex-row justify-left">
      <Image
        alt="Logo"
        src="logo.png"
        fill
        priority
        sizes="100%"
        className="relative object-contain h-full aspect-square shadow-2xl"
        />
    </Link>
  );
};

export default FooterLogo;
