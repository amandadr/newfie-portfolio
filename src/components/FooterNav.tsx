import React from "react";
import { Image, Link } from "@fluentui/react-components";

interface FooterLinkProps {
  imgHref: string;
  imgAlt: string;
  href: string;
  target?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  imgHref,
  imgAlt,
  href,
  target,
}) => {
  return (
    <Link
      as="a"
      href={href}
      target={target}
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        alignItems: "end",
      }}
    >
      <Image
        src={imgHref}
        alt={imgAlt}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          aspectRatio: "1/1",
        }}
      />
    </Link>
  );
};

const FooterNav: React.FC = () => {
  return (
    <nav
      style={{
        position: "relative",
        zIndex: "2",
        minWidth: "12em",
        maxHeight: "40%",
        marginTop: "5%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
        backgroundColor: "rgba(50, 50, 50, 0.45)",
        borderRadius: "10px",
        gap: "1em",
        padding: "3%",
      }}
    >
      <FooterLink
        imgHref="/icons/linkedin-color.svg"
        imgAlt="LinkedIn"
        href="https://www.linkedin.com/in/amandadroy/"
        target="_blank"
      />
      <FooterLink
        imgHref="/icons/github-color.svg"
        imgAlt="GitHub"
        href="https://www.github.com/amandadr"
        target="_blank"
      />
      <FooterLink
        imgHref="/icons/gmail-color.svg"
        imgAlt="Email"
        href="mailto:amandadroy@gmail.com"
        target="_blank"
      />
    </nav>
  );
}

export default FooterNav;