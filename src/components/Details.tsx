import React, { useRef } from "react";
import { Text, Card, CardPreview, Image } from "@fluentui/react-components";
import coppermine_2 from "/images/coppermine_2.jpeg";
import me_1 from "/images/me_1.jpeg";

interface DetailsProps {
  bgImage?: string;
  highlightImage?: string;
  highlightPosition?: "left" | "right";
  header: string;
  previewText: string;
}

const Details: React.FC<DetailsProps> = ({
  bgImage,
  highlightImage,
  highlightPosition,
  header,
  previewText,
}) => {
  const position = highlightPosition || (highlightImage ? "left" : undefined);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        height: "60vh",
        width: "100%",
        position: "relative",
      }}
    >
      <Image
        src={bgImage || coppermine_2}
        fit="cover"
        style={{
          width: "100%",
          height: "100%",
          filter: "brightness(0.85)",
          outline: "0.5em inset rgba(70, 70, 70, 0.1)",
          outlineOffset: "-0.5em",
        }}
      />
      {highlightImage && (
        <Image
          src={highlightImage || me_1}
          fit="contain"
          style={{
            position: "absolute",
            width: "50%",
            height: "100%",
            outline: "0.5em inset rgba(70, 70, 70, 0.1)",
            outlineOffset: "-0.5em",
            borderRadius:
              position === "left" ? "0 0.2em 0.2em 0" : "0.2em 0 0 0.2em",
            backgroundColor: "rgba(70, 70, 70, 0.75)",
            left: position === "left" ? 0 : "auto",
            right: position === "right" ? 0 : "auto",
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "row",
          justifyContent: position === "left" ? "end" : "start",
          alignItems: "center",
        }}
      >
        <Card
          size="medium"
          style={{
            position: "absolute",
            height: "95%",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            padding: "2em",
            backgroundColor: "rgba(30, 30, 30, 0.75)",
            color: "whitesmoke",
            borderRadius: "2em",
            left: position === "left" ? "50%" : "auto",
            right: position === "right" ? "50%" : "auto",
          }}
        >
          <CardPreview
            style={{
              display: "flex",
              flexDirection: "column",
              maxHeight: "100%",
              gap: "1em",
            }}
          >
            <Text size={700}>{header || "Header"}</Text>
            <Text size={400}>{previewText || "This is Preview text."}</Text>
          </CardPreview>
        </Card>
      </div>
    </div>
  );
};

export default Details;
