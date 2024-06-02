import React, { useEffect, useRef } from "react";
import {
  Text,
  Card,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
import "../index.css";

interface IntroductionProps {
  backgroundImageUrl: string;
}

const Introduction: React.FC<IntroductionProps> = ({ backgroundImageUrl }) => {
  const introductionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeIn");
        } else {
          setTimeout(() => {
            entry.target.classList.remove("animate__animated", "animate__fadeIn");
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

  const backgroundStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100dvh",
    minWidth: "100vw",
    backgroundImage: `url(${
      backgroundImageUrl ||
      "https://backiee.com/static/wallpapers/3840x2160/187444.jpg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.85)",
    animationDuration: "0.75s",
    outline: "1em inset rgba(70, 70, 70, 0.1)",
    outlineOffset: "-0.5em",
  };

  const cardStyle = {
    maxWidth: "80%",
    padding: "48px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "32px",
  };

  return (
    <div
      ref={introductionRef}
      style={backgroundStyle}
    >
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
