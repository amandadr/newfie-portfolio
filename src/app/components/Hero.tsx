"use client";
import React, { useEffect } from "react";
import OptimizedImage from "@/app/components/OptimizedImage";
import { preloadImages } from "@/utils/imagePreloader";

interface HeroProps {
  imageUrl?: string;
  header?: string;
}

// Lightweight blur data URL for placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#a0a0a0" offset="20%" />
      <stop stop-color="#b0b0b0" offset="50%" />
      <stop stop-color="#a0a0a0" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#a0a0a0" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Hero: React.FC<HeroProps> = (props) => {
  const { imageUrl, header } = props;
  const heroImage = imageUrl || "coppermine_1.jpeg";

  useEffect(() => {
    // Preload hero image immediately for faster loading
    preloadImages([
      {
        src: heroImage,
        options: {
          priority: "high",
          quality: 85,
          width: 1920,
        },
      },
    ]);
  }, [heroImage]);

  return (
    <div className="Hero relative w-[100vw] h-[100vh] flex items-center justify-center">
      <OptimizedImage
        src={heroImage}
        alt="Hero background"
        contentType="hero"
        sizeType="hero"
        fill
        priority
        preload
        eager
        width={1920}
        height={1080}
        className="relative object-cover flex items-center justify-center w-full h-full z-1 outline-[0.5em] inset-[rgba(70, 70, 70, 0.1)] outline-offset-[-0.5em]"
      />
      <div className="absolute flex items-center justify-center w-full h-full z-2">
        <h1 className="text-[min(6vw,6vh)] text-center text-white font-medium shadow-lg bg-black bg-opacity-30 p-2 px-3 rounded-2xl">
          {header || "Welcome to my portfolio!"}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
