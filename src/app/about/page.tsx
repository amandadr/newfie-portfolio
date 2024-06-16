"use client";
import React, { useRef } from "react";
import LogoNav from "components/Nav/LogoNav";
import Hero from "components/Hero";
import Divider from "components/Divider";
import Details from "components/Details";
import NavContainer from "components/Nav/NavContainer";
import Skills from "components/Skills";
import Footer from "components/Footer/Footer";

import { expIcons, skills } from "data/AboutPage";

export default function AboutPage() {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="AboutPage" style={{ width: "100vw", height: "100vh" }}>
      <LogoNav footerRef={footerRef} currentPage="about" />
      <Hero header="Who Knit You?" imageUrl={"fire.jpeg"} />
      <Divider outline={true} />
      <Details
        header="About Me"
        previewText="I am a software developer with a passion for learning. I am currently working on a project that will help people learn about how I code. It has nothing to do with knitting."
        bgImage={"beach_2.jpeg"}
        highlightImage={"me_1.jpeg"}
        highlightPosition="right"
      />
      <Divider outline={true} width="0.5em" />
      <NavContainer title="My Dev Experience:" navItems={expIcons} />
      <Divider />
      <Details
        header="What I Believe In"
        previewText="I believe in the power of learning and the importance of sharing knowledge. I believe that everyone has the potential to learn and grow."
        bgImage={"flower_2.jpeg"}
        highlightImage={"trees_2.jpeg"}
        highlightPosition="left"
      />
      <Divider outline={true} />
      <Skills skills={skills.icons} imageUrl={"gorge_1.jpeg"} />
      <Divider outline={true} />
      <Details
        header="Dreams for the Future"
        previewText="I dream of a world where everyone has access to the tools they need to learn and grow. I dream of a world where everyone has the opportunity to reach their full potential."
        bgImage={"river.jpeg"}
        highlightImage="trees_3.jpeg"
        highlightPosition="right"
      />
      <Divider outline={true} />
      <Footer ref={footerRef} imageUrl={"flower_3.jpeg"} />
    </div>
  );
};
