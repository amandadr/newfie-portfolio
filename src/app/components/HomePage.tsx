"use client";
import React, { useRef } from "react";
import Images from "components/Images";
import LogoNav from "components/LogoNav";
import Hero from "components/Hero";
import Introduction from "components/Introduction";
import NavContainer from "components/NavContainer";
import Footer from "components/Footer";

import { homeLinks } from "data/HomePage";
import images from "data/Images";
const { coppermine_2, gorge_2, sky_1 } = images;

const HomePage: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="HomePage" style={{ width: "100vw", height: "100vh" }}>
      <Images images={images} />
      <LogoNav footerRef={footerRef} currentPage="home" />
      <Hero imageUrl={coppermine_2} text="Whaddya hat, bh'y?" />
      <Introduction
        header="Hi, I'm Amanda Roy"
        previewText="Welcome to my portfolio, where I hope you'll learn lots about my journey :)"
        imageUrl={gorge_2}
      />
      <NavContainer navLinks={homeLinks} />
      <Footer ref={footerRef} imageUrl={sky_1} />
    </div>
  );
};

export default HomePage;
