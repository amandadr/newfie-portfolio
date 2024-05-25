import React from "react";
import { Stack, Image, Text } from "@fluentui/react";

const Hero = ({
  imageUrl = "https://github.com/amandadr/newfie-portfolio/blob/page/homepage/public/images/coppermine_1.jpeg?raw=true",
  text = "I need a Hero!",
}) => {
  return (
    <Stack
      className="hero"
      styles={{
        root: {
          height: "100vh",
          width: "100vw",
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Image
        src={imageUrl}
        styles={{
          root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          },
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
          variant="xxLarge"
          styles={{ root: { fontWeight: "bold", color: "white" } }}
        >
          {text}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Hero;
