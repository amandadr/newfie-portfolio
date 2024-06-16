"use client";
import React, { useRef } from "react";
import LogoNav from "components/LogoNav";
import Hero from "components/Hero";
import Details from "components/Details";
import NavContainer from "components/NavContainer";
import Footer from "components/Footer";

import { connectLinks, workLinks } from "data/ContactPage";

export default function ContactPage() {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="ContactPage" style={{ width: "100vw", height: "100vh" }}>
      <LogoNav footerRef={footerRef} currentPage="contact" />
      <Hero />
      <Details
        header="Thank you for being a friend :)"
        previewText="If you'd like to connect with me, feel free to reach out through any of the following channels :D"
        bgImage=""
      />
      <NavContainer navItems={connectLinks} />
      <Details
        header="Looking good and need a solution?"
        previewText="I'm open to hear you out and talk about building something awesome together!"
        bgImage=""
        navItems={workLinks}
      />
      <Footer ref={footerRef} />
    </div>
  );
};
