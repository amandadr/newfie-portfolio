"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";

interface IntroductionProps {
  headerText: string;
  bodyText: string;
  imageUrl: string;
}

const Introduction: React.FC<IntroductionProps> = ({
  headerText,
  bodyText,
  imageUrl,
}) => {
  return (
    <div className="Introduction relative w-full h-full flex flex-row justify-center items-center">
      <Image
        alt="Introduction"
        src={imageUrl || "coppermine_2.jpeg"}
        fill
        className="absolute w-full h-full z-1 outline-0.5em inset-rgba(70, 70, 70, 0.1) outline-offset--0.5em"
      />
      <Card className="z-2 relative max-w-[90%] max-h-[90%] flex flex-col items-start justify-center p-4 bg-[rgba(30,30,30,0.8)] text-white rounded-3xl">
        <CardHeader className="max-w-[98%] text-left text-xl font-light underline underline-offset-8">
          {headerText || "Header"}
        </CardHeader>
        <CardBody className="max-h-[90%] max-w-[95%] ml-2 text-justify">
          {bodyText || "This is Preview text."}
        </CardBody>
      </Card>
    </div>
  );
};

export default Introduction;
