"use client";
import React, { useState } from "react";

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

export default BouncingDots;
