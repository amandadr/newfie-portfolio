import React from "react";
import { Stack } from "@fluentui/react";
import { Image, Text } from "@fluentui/react-components";
import "../index.css";

interface HeroProps {
  imageUrl?: string;
  text?: string;
}

const Hero: React.FC<HeroProps> = (props) => {
  const { imageUrl, text } = props;
  return (
    <Stack
      className="hero"
      styles={{
        root: {
          height: "100vh",
          width: "100%",
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Image
        src={
          imageUrl ||
          "https://github.com/amandadr/newfie-portfolio/blob/page/homepage/public/images/coppermine_1.jpeg?raw=true"
        }
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
        }}
      />
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        styles={{
          root: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
      >
        <Text
          size={700}
          style={{ fontWeight: "bold", color: "white" }}
        >
          {text || "Welcome to my portfolio!"}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Hero;
