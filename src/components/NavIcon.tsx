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
      className="nav-icon"
      styles={{
        root: {
          display: "flex",
          flex: "1",
          // maxWidth: "33.33%",
          minWidth: "33.33%",
          aspectRatio: "1/1",
        },
      }}
    >
      <Link
        href={url}
        target="_blank"
        appearance="subtle"
        style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center"}}
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
          style={{ position: "absolute", zIndex: "2", color: "white" }}
          weight="bold"
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