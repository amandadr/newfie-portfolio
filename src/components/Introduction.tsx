import React, { useEffect, useRef } from "react";
import {
  Text,
  Card,
  CardPreview,
  Image,
} from "@fluentui/react-components";
import coppermine_2 from "images/coppermine_2.jpeg";
import "../index.css";

interface IntroductionProps {
  header: string;
  previewText: string;
  imageUrl: string;
}

const Introduction: React.FC<IntroductionProps> = ({ header, previewText, imageUrl }) => {
  const introductionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeIn");
        } else {
          setTimeout(() => {
            entry.target.classList.remove(
              "animate__animated",
              "animate__fadeIn"
            );
          }, 1000);
        }
      },
      { threshold: 0.2 }
    );

    if (introductionRef.current) {
      observer.observe(introductionRef.current);
    }

    return () => {
      if (introductionRef.current) {
        observer.unobserve(introductionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={introductionRef}
      style={{
        position: "relative",
        height: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={imageUrl || coppermine_2}
        loading="lazy"
        fit="cover"
        style={{
          position: "absolute",
          zIndex: 1,
          display: "flex",
          width: "100%",
          height: "100%",
          outline: "0.5em inset rgba(70, 70, 70, 0.1)",
          outlineOffset: "-0.5em",
        }}
      />
      <Card
        size="medium"
        style={{
          zIndex: 2,
          position: "relative",
          maxHeight: "95%",
          maxWidth: "95%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          padding: "2em",
          backgroundColor: "rgba(30, 30, 30, 0.8)",
          color: "whitesmoke",
          borderRadius: "2em",
        }}
      >
        <CardPreview
          style={{
            display: "flex",
            flexDirection: "column",
            maxHeight: "95%",
            gap: "1em",
          }}
        >
          <Text size={700}>{header || "Header"}</Text>
          <Text size={400}>{previewText || "This is Preview text."}</Text>
        </CardPreview>
      </Card>
    </div>
  );
};

export default Introduction;
