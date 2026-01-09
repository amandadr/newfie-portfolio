"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import {
  getBlurDataURL,
  getOptimalQuality,
  getResponsiveSizes,
} from "@/utils/imageUtils";

interface IntroductionProps {
  headerText: string;
  bodyText: string;
  imageUrl: string;
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

const Introduction: React.FC<IntroductionProps> = ({
  headerText,
  bodyText,
  imageUrl,
}) => {
  return (
    <div className="Introduction relative w-full h-full flex flex-row justify-center items-center">
      <Image
        alt={`Introduction section with ${headerText}`}
        src={imageUrl || "coppermine_2.jpeg"}
        fill
        priority
        quality={getOptimalQuality(1920, "general")}
        sizes={getResponsiveSizes("full-width")}
        placeholder="blur"
        blurDataURL={getBlurDataURL(1920, 1080)}
        className="absolute object-cover w-full h-full z-1 outline-0.5em inset-rgba(70, 70, 70, 0.1) outline-offset--0.5em"
      />
      <Card className="z-2 relative max-w-[90%] max-h-[90%] flex flex-col items-start justify-center p-4 bg-[rgba(30,30,30,0.8)] text-white rounded-3xl">
        <CardHeader className="max-w-[98%] text-left text-[min(4vw,4vh)] font-light underline underline-offset-8">
          {headerText || "Header"}
        </CardHeader>
        <CardBody className="max-h-[90%] max-w-[95%] ml-2 text-[min(2.75vw,2.75vh)] text-justify">
          {bodyText || "This is Preview text."}
        </CardBody>
      </Card>
    </div>
  );
};

export default Introduction;
