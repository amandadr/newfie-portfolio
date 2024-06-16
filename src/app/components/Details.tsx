"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import NavItem from "components/NavItem";

interface DetailsProps {
  bgImage?: string;
  highlightImage?: string;
  navItems?: {
    imageUrl: string;
    label: string;
    target?: string;
    url: string;
  }[];
  highlightPosition?: "left" | "right";
  header: string;
  previewText: string;
}

const Details: React.FC<DetailsProps> = ({
  bgImage,
  highlightImage,
  navItems,
  highlightPosition,
  header,
  previewText,
}) => {
  const position = highlightPosition || "left";
  const maxHeight = "60vh";
  const [isHorizontal, setIsHorizontal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLayout = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setIsHorizontal(offsetWidth > offsetHeight);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  return (
    <div
      className={
        "Details relative w-[100vw] bg-[transparent] flex flex-row justify-start overflow-hidden" +
        " " +
        `h-[${maxHeight}]`
      }
    >
      <Image
        alt=","
        src={bgImage || "coppermine_2.jpeg"}
        layout="fill"
        objectFit="cover"
        className="relative filter brightness-[0.85] z-1 w-[100vw] h-[60vh] outline-[0.5em] inset-[rgba(70,70,70,0.1)] outline-offset-[-0.5em]"
      />
      {highlightImage && (
        <div
          ref={containerRef}
          className={
            "absolute w-[50%] min-h-[100%] flex items-center justify-center z-2 bg-[rgba(70,70,70,0.75)]" +
            " " +
            (position === "left" ? "left-0" : "right-0")
          }
        >
          <Image
            alt=","
            src={highlightImage || "me_1.jpeg"}
            layout="responsive"
            width={500}
            height={1000}
            className={
              "absolute w-[100%] h-[100%] max-w-[100%] max-h-[100%] object-contain z-30 outline-[0.5em] inset-[rgba(70,70,70,0.1)] outline-offset-[-0.5em] border-[0.1em solid rgba(20,20,20,0.7)]" +
              " " +
              (position === "left"
                ? "rounded-[0.2em 0 0 0.2em]"
                : "rounded-[0 0.2em 0.2em 0]")
            }
          />
        </div>
      )}
      {navItems && (
        <div
          ref={containerRef}
          className={
            "absolute h-[100%] max-w-[50%] w-[50%] flex wrap items-center justify-center" +
            `${maxHeight}` +
            " " +
            (isHorizontal ? "flex-row" : "flex-col")
          }
        >
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              {...item}
            />
          ))}
        </div>
      )}
      <div
        className={
          "absolute h-[100%] w-[100%] bg-[transparent] flex flex-row items-center border-[none]" +
          " " +
          (position === "left" ? "justify-left" : "justify-right")
        }
      >
        <Card
          className={
            "absolute mx-2 max-h-[65%] max-w-[50%] flex flex-col items-start justify-center p-[2em] bg-[rgba(30,30,30,0.75)] text-white rounded-2xl z-40" +
            " " +
            (position === "left" ? "left-1/2" : "right-1/2")
          }
        >
          <CardHeader style={{ marginBottom: "1em" }}>
            {header || "Header"}
          </CardHeader>
          <CardBody>{previewText || "This is Preview text."}</CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Details;
