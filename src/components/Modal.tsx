import React from "react";
import { Image, Card, CardPreview, Text } from "@fluentui/react-components";

const styles = {
  dotContainer: {
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4em",
    marginBottom: "-3em",
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
};

const BouncingDots: React.FC = () => (
  <div style={styles.dotContainer as React.CSSProperties}>
    <div style={{ ...styles.dot, ...styles.dot1 } as React.CSSProperties}></div>
    <div style={{ ...styles.dot, ...styles.dot2 } as React.CSSProperties}></div>
    <div style={{ ...styles.dot, ...styles.dot3 } as React.CSSProperties}></div>
  </div>
);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: string;
  header: string;
  content: string;
  imageUrl?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  date,
  header,
  content,
  imageUrl,
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
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <CardPreview>
          <Text size={300}>{date}</Text>
          <Text size={700}>{header}</Text>
          <Text size={400}>{content}</Text>
        </CardPreview>
      </Card>
      <BouncingDots />
    </div>
  );
};

export default Modal;
