"use client";
import React, { useRef, useEffect } from "react";
import "@/app/globals.css";
import LogoNav from "components/Nav/LogoNav";
import Hero from "components/Hero";
import Introduction from "components/Introduction";
import NavContainer from "components/Nav/NavContainer";
import Footer from "components/Footer/Footer";
import { preloadImages } from "@/utils/imagePreloader";
import {
  initPerformanceOptimizations,
  runtimePerformanceMonitor,
} from "@/utils/performance";
import clientLogger from "@/utils/clientLogger";

import { homeLinks } from "data/HomePage";

export default function HomePage() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize performance optimizations immediately
    initPerformanceOptimizations();

    // Start timing page initialization
    runtimePerformanceMonitor.startTiming("page-init");

    // Preload critical images for better performance
    const criticalImages = [
      {
        src: "gorge_4.jpeg",
        options: { priority: "high" as const, quality: 85, width: 1920 },
      }, // Hero
      {
        src: "beach_2.jpeg",
        options: { priority: "high" as const, quality: 80, width: 1920 },
      }, // Introduction
      {
        src: "sky_1.jpeg",
        options: { priority: "low" as const, quality: 75, width: 1920 },
      }, // Footer
    ];

    const startTime = performance.now();
    preloadImages(criticalImages)
      .then(() => {
        const loadTime = performance.now() - startTime;
        clientLogger.info("Critical images preloaded", {
          loadTime: Math.round(loadTime),
          imageCount: criticalImages.length,
        });

        // End timing page initialization
        runtimePerformanceMonitor.endTiming("page-init");

        // Log performance metrics after initial load
        setTimeout(() => {
          const metrics = runtimePerformanceMonitor.getPerformanceMetrics();
          clientLogger.info("Page load metrics", metrics);
        }, 1000);
      })
      .catch((error) => {
        clientLogger.error("Failed to preload critical images", {
          error: error.message,
        });
      });
  }, []);

  return (
    <div className="HomePage" style={{ width: "100vw", height: "100vh" }}>
      <LogoNav footerRef={footerRef} currentPage="home" />
      <Hero imageUrl={"gorge_4.jpeg"} header="How's ya gettin' on, me buddy?" />
      <Introduction
        headerText="Hi, I'm Amanda Roy"
        bodyText="Welcome to my portfolio, where I hope you'll learn lots about my journey :)"
        imageUrl={"beach_2.jpeg"}
      />
      <NavContainer navItems={homeLinks} />
      <Footer ref={footerRef} imageUrl={"sky_1.jpeg"} />
    </div>
  );
}
