import React from "react";

interface DividerProps {
  color?: string;
  width?: string;
  outline?: boolean;
  outlineColor?: string;
  outlineWidth?: string;
  outlineOffset?: string;
  orientation?: "horizontal" | "vertical";
}

const Divider: React.FC<DividerProps> = ({
  color="rgba(50, 50, 50, 0.8)",
  width="1.5px",
  outline=false,
  outlineColor="rgba(50, 50, 50, 0.05)",
  outlineWidth="20px",
  outlineOffset="-10px",
  orientation="horizontal",
}) => {
  const isHorizontal = orientation === "horizontal";

  const dividerStyle: React.CSSProperties = {
    zIndex: 3,
    backgroundColor: color,
    width: isHorizontal ? "100%" : width,
    height: isHorizontal ? width : "100%",
    position: "relative",
  };

  const outlineStyle: React.CSSProperties = {
    zIndex: 3,
    backgroundColor: color,
    width: isHorizontal ? "100%" : width,
    height: isHorizontal ? width : "100%",
    position: "relative",
    outline: `${outlineWidth} inset ${outlineColor}`,
    outlineOffset: outlineOffset,
    pointerEvents: "none",
  };

  return (
    <div
      style={{
        position: "relative",
        display: isHorizontal ? "block" : "inline-block",
      }}
    >
      {!outline && <div style={dividerStyle}></div>}
      {outline && <div style={outlineStyle}></div>}
    </div>
  );
};

export default Divider;
