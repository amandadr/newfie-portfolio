"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import NavImage from "components/Nav/NavImage";

interface Details {
  date: string;
  header: string;
  content: string;
  modalUrl?: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  techStack?: { class: string; name: string }[];
}

interface NavItemProps {
  imageUrl: string;
  label: string;
  details?: Details;
  onClick?: () => void;
  url?: string;
  target?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  imageUrl,
  label,
  onClick,
  url,
  target,
}) => {
  const isLink = !!url;

  return (
    <div className="relative flex flex-auto min-w-[33.33%] max-w-[50%] max-h-[50vh] aspect-square">
      {isLink ? (
        <Link
          href={url!}
          target={target}
          className="relative z-10 flex justify-center items-center h-full w-full rounded-none"
        >
          <NavImage imageUrl={imageUrl} label={label} />
        </Link>
      ) : (
        // if not Link, must be Modal
        <Button
          onClick={onClick!}
          className="relative flex justify-center items-center h-full w-full rounded-none"
        >
          <NavImage imageUrl={imageUrl} label={label} />
        </Button>
      )}
    </div>
  );
};

export default NavItem;
