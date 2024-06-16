"use client";
import React, { useRef } from "react";
import "@/app/globals.css";
import LogoNav from "components/LogoNav";
import Hero from "components/Hero";
import Introduction from "components/Introduction";
import NavContainer from "components/NavContainer";
import Footer from "components/Footer";

import { homeLinks } from "data/HomePage";

 export default function HomePage() {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="HomePage" style={{ width: "100vw", height: "100vh" }}>
      <LogoNav footerRef={footerRef} currentPage="home" />
      <Hero imageUrl={"coppermine_2.jpeg"} header="Whaddya hat, bh'y?" />
      <Introduction
        headerText="Hi, I'm Amanda Roy"
        bodyText="Welcome to my portfolio, where I hope you'll learn lots about my journey :)"
        imageUrl={"gorge_2.jpeg"}
      />
      <NavContainer navItems={homeLinks} />
      <Footer ref={footerRef} imageUrl={"sky_1.jpeg"} />
    </div>
  );
};
