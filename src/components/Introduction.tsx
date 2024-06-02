import React, { useEffect, useRef } from "react";
import {
  Text,
  Card,
  CardHeader,
  CardPreview,
  Image,
} from "@fluentui/react-components";
import coppermine_2 from "images/coppermine_2.jpeg";
import "../index.css";

interface IntroductionProps {
  imageUrl: string;
}

const Introduction: React.FC<IntroductionProps> = ({ imageUrl }) => {
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

  const cardStyle = {
    maxWidth: "80%",
    padding: "48px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "32px",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div
      ref={introductionRef}
      style={{ position: "relative", height: "100dvh", minWidth: "100vw" }}
    >
      <Image
        src={imageUrl || coppermine_2}
        fit="cover"
        style={{
          width: "100%",
          height: "100%",
          filter: "brightness(0.85)",
          outline: "0.5em inset rgba(70, 70, 70, 0.1)",
          outlineOffset: "-0.5em",
        }}
      />
      <Card style={cardStyle}>
        <CardHeader header="Hi, I'm John Doe" />
        <CardPreview>
          <Text size={400}>
            I'm a software engineer with 5 years of experience in web
            development.
          </Text>
        </CardPreview>
      </Card>
    </div>
  );
};

export default Introduction;
