"use client";
import React, { useRef } from "react";
import LogoNav from "components/Nav/LogoNav";
import Hero from "components/Hero";
import Introduction from "components/Introduction";
import NavContainer from "components/Nav/NavContainer";
import Footer from "components/Footer/Footer";
import { projectIcons } from "data/ProjectsPage";

export default function ProjectsPage() {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="ProjectsPage"
      style={{ width: "100vw", height: "100vh" }}
    >
      <LogoNav footerRef={footerRef} currentPage="projects" />
      <Hero header="Projects" imageUrl={"gorge_2.jpeg"} />
      <Introduction
        headerText="These are my personal projects :)"
        bodyText="I'll tell you more about how to take it all in right here..."
        imageUrl=""
      />
      <NavContainer navItems={projectIcons} />
      <Footer ref={footerRef} imageUrl={"field.jpeg"} />
    </section>
  );
};