import React, { useState } from "react";
import {
  Image,
  Card,
  CardPreview,
  CardFooter,
  Text,
  Link,
} from "@fluentui/react-components";

const styles = {
  dotContainer: {
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4em",
    marginBottom: "-3em",
    cursor: "pointer",
  },
  dot: {
    width: "10px",
    height: "10px",
    margin: "0 5px",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderRadius: "50%",
    animation: "bounce 1.5s infinite",
  },
  dot1: {
    animationDelay: "0s",
  },
  dot2: {
    animationDelay: "0.3s",
  },
  dot3: {
    animationDelay: "0.6s",
  },
  "@keyframes bounce": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-10px)",
    },
  },
  xButton: {
    fontSize: "2em",
    color: "white",
    display: "none",
  },
  xButtonVisible: {
    display: "block",
  },
};

const BouncingDots: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={styles.dotContainer as React.CSSProperties}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClose}
    >
      {hover ? (
        <div
          style={
            {
              ...styles.xButton,
              ...styles.xButtonVisible,
            } as React.CSSProperties
          }
        >
          X
        </div>
      ) : (
        <>
          <div
            style={{ ...styles.dot, ...styles.dot1 } as React.CSSProperties}
          ></div>
          <div
            style={{ ...styles.dot, ...styles.dot2 } as React.CSSProperties}
          ></div>
          <div
            style={{ ...styles.dot, ...styles.dot3 } as React.CSSProperties}
          ></div>
        </>
      )}
    </div>
  );
};

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
  if (!isOpen) return null;

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
            {liveUrl && <Link
              href={liveUrl}
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
            </Link>}
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
      <BouncingDots onClose={onClose} />
    </div>
  );
};

export default Modal;
