"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import BouncingDots from "components/BouncingDots";
import Gallery from "components/Gallery";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  date?: string;
  header?: string;
  content?: string;
  modalUrl?: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  techStack?: { class: string; name: string }[];
};

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
        alt="flower_1.jpeg"
        src={modalUrl || "flower_1.jpeg"}
        fill
        sizes="100vw"
        className="absolute object-cover w-full h-full z-1 cursor-pointer"
        style={{ filter: "blur(3px) opacity(0.75)"}}
      />
      <Card
        className="z-2 px-8 py-6 bg-white rounded-lg cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="flex flex-row justify-between items-center gap-2">
          <div className="font-medium">{date}</div>
          <div className="w-80 flex flex-row justify-end gap-6">
            <Link
              color="foreground"
              href={githubUrl}
              target="_blank"
              className="flex flex-row justify-around items-center gap-2"
            >
              <i className="devicon-github-plain text-[2.5em]"></i>
              <div>GitHub Repo</div>
            </Link>
            {liveUrl && (
              <Link
                color="foreground"
                href={liveUrl}
                target="_blank"
                className="flex flex-row justify-around items-center gap-2"
              >
                <i className="devicon-chrome-plain text-[2.5em]"></i>
                <div>Live Site</div>
              </Link>
            )}
          </div>
        </CardHeader>
        <CardBody>
          <div className="text-lg font-bold">{header}</div>
          <div>{content}</div>
        </CardBody>
        <CardFooter className="gap-4">
          {techStack?.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-wrap justify-center items-center gap-2"
            >
              <i className={tech.class + " text-[2em]"}></i>
              <div className="text-small">{tech.name}</div>
            </div>
          ))}
        </CardFooter>
      </Card>
      {images && (images[1] && <Gallery images={images} />)}
      <BouncingDots onClose={onClose} />
    </div>
  );
};

export default Modal;
