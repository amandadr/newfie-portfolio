"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FooterLinkProps {
  imgHref: string;
  imgAlt: string;
  href: string;
  target?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  imgHref,
  imgAlt,
  href,
  target,
}) => {
  return (
    <Link
      href={href}
      target={target}
      className="relative min-h-full min-w-[20%] max-w-[5vw] w-full aspect-square"
    >
      <Image
        alt={imgAlt}
        src={imgHref}
        fill
        sizes="100%"
        className="relative object-contain min-h-full min-w-full"
      />
    </Link>
  );
};

export default FooterLink;