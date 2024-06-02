import React from "react";
import { Stack } from "@fluentui/react";
import { Image, Link, Text } from "@fluentui/react-components";
import "../index.css";

interface NavIconProps {
  label: string;
  url: string;
  imageUrl: string;
}

const NavIcon: React.FC<NavIconProps> = (props) => {
  const { label, url, imageUrl } = props;

  return (
    <Stack
      className="NavIcon"
      styles={{
        root: {
          display: "flex",
          flex: "1",
          minWidth: "33.33%",
          aspectRatio: "1/1",
        },
      }}
    >
      <Link
        as="a"
        href={url}
        target=""
        appearance="subtle"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={imageUrl}
          fit="cover"
          style={{
            position: "relative",
            aspectRatio: "1/1",
            zIndex: "1",
          }}
        />
        <Text
          style={{
            position: "absolute",
            zIndex: "2",
            color: "white",
            textShadow: "5px 2px 8px #3D3D3D, -5px -2px 8px #3D3D3D",
          }}
          weight="bold"
          as="h2"
          size={600}
          align="center"
        >
          {label}
        </Text>
      </Link>
    </Stack>
  );
};

export default NavIcon;
