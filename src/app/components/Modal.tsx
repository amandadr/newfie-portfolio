"use client";
import React from "react";
import {
  Card,
  CardPreview,
  CardFooter,
  Text,
  Link,
} from "@fluentui/react-components";
import Image from "next/image";
import BouncingDots from "./BouncingDots";
import Gallery from "./Gallery";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  date?: string; // Make these optional since not all items will have them
  header?: string;
  content?: string;
  modalUrl?: string;
  images?: string[]; // Use an optional array for images
  liveUrl?: string;
  githubUrl?: string; // Make GitHub URL optional as well
  techStack?: { class: string; name: string }[];
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  date,
  header,
  content,
  modalUrl,
  images,
  liveUrl,
  githubUrl,
  techStack,
}) => {
  return (
    <div
    className="Modal relative w-full max-w-[100vw] flex flex-col justify-center items-center bg-[rgba(0,0,0,0.5)] z-10 p-20 gap-4"
      onClick={onClose}
    >
      <Image
        alt="Modal"
        src={modalUrl || "flower_1.jpeg"}
        fill
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
              className="flex flex-wrap"
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
      <Gallery images={images} />
      <BouncingDots onClose={onClose} />
    </div>
  );
};

export default Modal;
