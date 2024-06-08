"use client";
import React from "react";
import { Image, Link, Text } from "@fluentui/react-components";

interface NavLinkProps {
  imageUrl: string;
  label: string;
  target?: string;
  url: string;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const { label, url, target, imageUrl } = props;

  return (
    <div
      className="NavLink"
      style={{
        display: "flex",
        flex: "1 1",
        minWidth: "33.33%",
        maxWidth: "50%",
        maxHeight: "50%" && "50vh",
        aspectRatio: "1/1",
      }}
    >
      <Link
        as="a"
        href={url}
        target={target}
        appearance="subtle"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Image
          src={imageUrl}
          loading="lazy"
          fit="cover"
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            aspectRatio: "1/1",
            zIndex: "1",
            outline: "0.2em solid rgba(70, 70, 70, 0.1)",
            outlineOffset: "-0.2em",
          }}
        />
        <Text
          style={{
            position: "absolute",
            zIndex: "2",
            color: "white",
            textShadow: "5px 2px 8px #3D3D3D, -5px -2px 8px #3D3D3D",
            backgroundColor: "rgba(100, 100, 100, 0.35)",
            borderRadius: "2em",
          }}
          weight="bold"
          as="h2"
          size={600}
          align="center"
        >
          {label}
        </Text>
      </Link>
    </div>
  );
};

export default NavLink;
