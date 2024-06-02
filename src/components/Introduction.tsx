import React, { useEffect, useRef } from "react";
import {
  Stack,
  Text,
  DocumentCard,
  DocumentCardTitle,
  DocumentCardDetails,
} from "@fluentui/react";

interface IntroductionProps {
  backgroundImageUrl: string;
}

const Introduction: React.FC<IntroductionProps> = ({ backgroundImageUrl }) => {
  const introductionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("zoomed");
        } else {
          entry.target.classList.remove("zoomed");
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
    height: "100vh",
    backgroundImage: `url(${
      backgroundImageUrl ||
      "https://backiee.com/static/wallpapers/3840x2160/187444.jpg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.85)",
  };

  const cardStyle = {
    padding: "48px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "32px",
  };

  return (
    <div
      ref={introductionRef}
      style={backgroundStyle}
    >
      <DocumentCard style={cardStyle}>
        <DocumentCardTitle title="Hi, I'm John Doe" />
        <DocumentCardDetails>
          <Text variant="medium">
            I'm a software engineer with 5 years of experience in web
            development.
          </Text>
        </DocumentCardDetails>
      </DocumentCard>
    </div>
  );
};

export default Introduction;
