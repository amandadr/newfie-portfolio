import React from "react";
import { Image, Link, Text } from "@fluentui/react-components";
import "../index.css";

interface Details {
  date: string;
  header: string;
  content: string;
  modalUrl?: string;
  images: string[];
  liveUrl?: string;
  githubUrl: string;
  techStack?: { class: string; name: string }[];
}

interface NavIconProps {
  imageUrl: string;
  label: string;
  details: Details;
  hook: () => void;
}

const NavIcon: React.FC<NavIconProps> = ({ imageUrl, label, hook }) => {
  return (
    <>
      <div
        className="NavIcon"
        style={{
          display: "flex",
          flex: "1",
          minWidth: "33.33%",
          maxWidth: "66.66%",
          aspectRatio: "1/1",
        }}
        onClick={hook}
      >
        <Link
          as="button"
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
              outline: "0.3em solid rgba(70, 70, 70, 0.2)",
              outlineOffset: "-0.3em",
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
    </>
  );
};

export default NavIcon;
