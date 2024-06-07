import React, { useRef } from "react";
import LogoNav from "components/LogoNav";
import Hero from "components/Hero";
import Introduction from "components/Introduction";
import NavContainer from "components/NavContainer";
import Footer from "components/Footer";
import Images from "components/Images";
import { homeLinks } from "data/HomePage";
import coppermine_2 from "/images/coppermine_2.jpeg";
import gorge_2 from "/images/gorge_2.jpeg";
import sky_1 from "/images/sky_1.jpeg";
import "../index.css";

const HomePage: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="HomePage" style={{ width: "100vw", height: "100vh" }}>
      <Images />
      <LogoNav footerRef={footerRef} />
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
