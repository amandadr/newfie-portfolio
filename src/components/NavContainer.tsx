import React, { useState } from "react";
import { Text } from "@fluentui/react-components";
import NavIcon from "./NavIcon";
import NavLink from "./NavLink";
import Modal from "./Modal";
import "../index.css";

interface NavContainerProps {
  navIcons?: {
    imageUrl: string;
    label: string;
    details: { date: string; header: string; content: string; modalUrl?: string };
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
  const [selectedNavIcon, setSelectedNavIcon] = useState<string | null>(null);

  const handleNavIconClick = (label: string) => {
    setSelectedNavIcon(label);
  };

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
          weight="semibold"
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
            marginTop: "-1.1em",
            fontSize: "2.5em",
            color: "white",
            textShadow: "5px 2px 8px #232, -5px -2px 8px #232",
            backgroundColor: "rgba(100, 100, 100, 0.35)",
            borderRadius: "1em",
            boxShadow: "1px 1px 1px 2px rgba(40, 40, 40, 0.91)",
          }}
        >
          {title}
        </Text>
      )}
      {selectedNavIcon ? (
        <Modal
          isOpen={selectedNavIcon !== null}
          onClose={() => setSelectedNavIcon(null)}
          date={navIcons?.find((icon) => icon.label === selectedNavIcon)?.details.date || "Date"}
          header={navIcons?.find((icon) => icon.label === selectedNavIcon)?.details.header || "Header"}
          content={navIcons?.find((icon) => icon.label === selectedNavIcon)?.details.content || "Content"}
          imageUrl={navIcons?.find((icon) => icon.label === selectedNavIcon)?.details.modalUrl || "/images/flower_1.jpeg"}
        />
      ) : (
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
          {navLinks &&
            navLinks.map((navLink, index) => (
              <NavLink
                key={index}
                label={navLink.label}
                target={navLink.target}
                url={navLink.url}
                imageUrl={navLink.imageUrl}
              />
            ))}
          {navIcons &&
            navIcons.map((navIcon, index) => (
              <NavIcon
                key={index}
                label={navIcon.label}
                hook={() => handleNavIconClick(navIcon.label)}
                imageUrl={navIcon.imageUrl}
                details={navIcon.details}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default NavContainer;
