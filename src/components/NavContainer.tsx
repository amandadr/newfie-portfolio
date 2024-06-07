import React, { useState } from "react";
import { Text } from "@fluentui/react-components";
import NavIcon from "components/NavIcon";
import NavLink from "components/NavLink";
import Modal from "components/Modal";
import "../index.css";

interface NavContainerProps {
  navIcons?: {
    imageUrl: string;
    label: string;
    details: {
      date: string;
      header: string;
      content: string;
      modalUrl?: string;
      images?: string[];
      liveUrl?: string;
      githubUrl?: string;
      techStack?: { class: string; name: string }[];
    };
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

  const selectedIconDetails = navIcons?.find(
    (icon) => icon.label === selectedNavIcon
  )?.details;

  return (
    <div
      className="NavContainer"
      id="NavContainer"
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
            paddingInline: "0.3em",
            paddingBottom: "0.1em",
            marginTop: "-1.1em",
            fontSize: "2.5em",
            color: "white",
            textShadow: "5px 2px 8px #232, -5px -2px 8px #232",
            backgroundColor: "rgba(100, 100, 100, 0.5)",
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
          date={selectedIconDetails?.date || "Date"}
          header={selectedIconDetails?.header || "Header"}
          content={selectedIconDetails?.content || "Content"}
          imageUrl={selectedIconDetails?.modalUrl || "/images/flower_1.jpeg"}
          galleryImages={selectedIconDetails?.images || []}
          liveUrl={selectedIconDetails?.liveUrl || ""}
          githubUrl={selectedIconDetails?.githubUrl || ""}
          techStack={selectedIconDetails?.techStack || []}
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
