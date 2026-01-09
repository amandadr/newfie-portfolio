"use client";
import React, { useRef, useEffect } from "react";
import "@/app/globals.css";
import Hero from "components/Hero";
import Footer from "components/Footer/Footer";
import { preloadImages } from "@/utils/imagePreloader";

export default function HomePage() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload footer image for better performance
    preloadImages([
      {
        src: "field.jpeg",
        options: { priority: "high" as const, quality: 80, width: 1920 },
      },
    ]).catch((error) => {
      console.error("Failed to preload footer image", error);
    });
  }, []);

  return (
    <div
      className="HomePage flex flex-col"
      style={{ width: "100vw", minHeight: "100vh" }}
    >
      <Hero
        header="Under construction - check back soon!"
        imageUrl="gorge_4.jpeg"
      />
      <Footer ref={footerRef} imageUrl="trees_2.jpeg" />
    </div>
  );
}
