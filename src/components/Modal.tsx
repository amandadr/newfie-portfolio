import React from "react";
import {
  Image,
  Card,
  CardPreview,
  CardFooter,
  Text,
  Link,
} from "@fluentui/react-components";
import BouncingDots from "./BouncingDots";
import Gallery from "./Gallery";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: string;
  header: string;
  content: string;
  imageUrl?: string;
  galleryImages: Array<string>;
  liveUrl?: string;
  githubUrl: string;
  techStack?: { class: string; name: string }[];
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  date,
  header,
  content,
  imageUrl,
  galleryImages,
  liveUrl,
  githubUrl,
  techStack,
}) => {

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        paddingBlock: "5em",
        gap: "1em",
      }}
      onClick={onClose}
    >
      <Image
        fit="cover"
        loading="lazy"
        src={`${imageUrl}` || "/images/flower_1.jpeg"}
        style={{
          zIndex: 1,
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          filter: "blur(3px) opacity(0.75)",
          cursor: "pointer",
        }}
      />
      <Card
        size="medium"
        style={{
          zIndex: 2,
          width: "80%",
          padding: "2em",
          backgroundColor: "white",
          borderRadius: "1em",
          cursor: "default",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <CardPreview
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "-1em",
          }}
        >
          <Text size={300} weight="semibold">
            {date}
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              gap: "1em",
            }}
          >
            <Link
              href={githubUrl}
              target="_blank"
              appearance="subtle"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <i
                className="devicon-github-plain"
                style={{ fontSize: "2.5em", marginRight: "0.25em" }}
              ></i>
              <Text size={300}>GitHub Repo</Text>
            </Link>
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                appearance="subtle"
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <i
                  className="devicon-chrome-plain"
                  style={{ fontSize: "2.5em", marginRight: "0.25em" }}
                ></i>
                <Text size={300}>Live Site</Text>
              </Link>
            )}
          </div>
        </CardPreview>
        <CardPreview>
          <Text size={700}>{header}</Text>
          <Text size={400}>{content}</Text>
        </CardPreview>
        <CardFooter>
          {techStack?.map((tech) => (
            <div
              key={tech.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5em",
              }}
            >
              <i className={tech.class} style={{ fontSize: "1.5em" }}></i>
              <Text size={300}>{tech.name}</Text>
            </div>
          ))}
        </CardFooter>
      </Card>
      <Gallery images={galleryImages} />
      <BouncingDots onClose={onClose} />
    </div>
  );
};

export default Modal;
