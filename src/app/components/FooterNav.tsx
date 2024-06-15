"use client";
import React from "react";
import FooterLink from "./FooterLink";

const FooterNav: React.FC = () => {
  return (
    <nav className="relative z-2 flex flex-row align-center justify-around bg-[rgba(50,50,50,0.45)] rounded-[10px] p-[3%] min-w-[14em] max-h-[60%] gap-[0.5em]">
      <FooterLink
        imgHref="icons/linkedin-color.svg"
        imgAlt="LinkedIn"
        href="https://www.linkedin.com/in/amandadroy/"
        target="_blank"
      />
      <FooterLink
        imgHref="icons/github-color.svg"
        imgAlt="GitHub"
        href="https://www.github.com/amandadr"
        target="_blank"
      />
      <FooterLink
        imgHref="icons/gmail-color.svg"
        imgAlt="Email"
        href="mailto:amandadroy@gmail.com"
        target="_blank"
      />
    </nav>
  );
};

export default FooterNav;
