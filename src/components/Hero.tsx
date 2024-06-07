import React from "react";
import { Stack } from "@fluentui/react";
import { Image, Text } from "@fluentui/react-components";
import coppermine_1 from "/images/coppermine_1.jpeg";
import "../index.css";

interface HeroProps {
  imageUrl?: string;
  text?: string;
}

const Hero: React.FC<HeroProps> = (props) => {
  const { imageUrl, text } = props;
  return (
    <div
      className="Hero"
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        fit="cover"
        loading="lazy"
        src={
          imageUrl ||
          coppermine_1
        }
        style={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          outline: "0.5em inset rgba(70, 70, 70, 0.1)",
          outlineOffset: "-0.5em",
        }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Text
          size={700}
          as="h1"
          align="center"
          weight="bold"
          style={{
            color: "white",
            textShadow: "5px 2px 8px #3D3D3D, -5px -2px 8px #3D3D3D",
          }}
        >
          {text || "Welcome to my portfolio!"}
        </Text>
      </div>
    </div>
  );
};

export default Hero;
