import React from "react";
import { Stack } from "@fluentui/react";
import NavIcon from "./NavIcon";
import "../index.css";

interface NavContainerProps {
  navIcons: {
    label: string;
    url: string;
    imageUrl: string;
  }[];
}

const NavContainer: React.FC<NavContainerProps> = (props) => {
  const { navIcons } = props;

  return (
    <Stack
      className="nav-container"
      styles={{
        root: {
          position: "relative",
          height: "80vh",
          width: "100%",
          maxWidth: "100vw",
          display: "flex",
          flexFlow: "row wrap",
          flex: "1",
          justifyContent: "space-around",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      {navIcons.map((navIcon, index) => (
        <NavIcon
          key={index}
          label={navIcon.label}
          url={navIcon.url}
          imageUrl={navIcon.imageUrl}
        />
      ))}
    </Stack>
  );
};

export default NavContainer;
