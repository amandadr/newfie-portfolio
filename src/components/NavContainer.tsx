import React from "react";
import { Text } from "@fluentui/react-components";
import NavIcon from "./NavIcon";
import NavLink from "./NavLink";
import "../index.css";

interface NavContainerProps {
  navIcons?: {
    imageUrl: string;
    label: string;
    hook?: any;
  }[];
  navLinks?: {
    imageUrl: string;
    label: string;
    target?: string;
    url: string;
  }[];
  title?: string;
}

const NavContainer: React.FC<NavContainerProps> = (props) => {
  const { navIcons, navLinks, title } = props;

  return (
    <div
      className="navContainer"
      style={{
        minWidth: "100vw",
        maxWidth: "100vw",
        height: "max-content",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {title && (
        <Text
          as="h2"
          style={{
            zIndex: 3,
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "1em",
            maxHeight: "1em",
            width: "fit-content",
            paddingInline: "0.2em",
            paddingBottom: "0.1em",
            marginTop: "-1.25em",
            fontSize: "2.5em",
            color: "white",
            textShadow: "5px 2px 8px #3D3D3D, -5px -2px 8px #3D3D3D",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "0.25em",
          }}
        >
          {title}
        </Text>
      )}
      <div
        style={{
          position: "relative",
          maxHeight: "100%",
          width: "100%",
          maxWidth: "100vw",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-around",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        {navLinks && navLinks.map((navLink, index) => (
          <NavLink
            key={index}
            label={navLink.label}
            target={navLink.target}
            url={navLink.url}
            imageUrl={navLink.imageUrl}
          />
        ))}
        {navIcons && navIcons.map((navIcon, index) => (
          <NavIcon
            key={index}
            label={navIcon.label}
            hook={navIcon.hook && navIcon.hook}
            imageUrl={navIcon.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default NavContainer;
