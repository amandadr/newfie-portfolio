import React from "react";
import { Stack } from "@fluentui/react";
import { Image, Link, Text } from "@fluentui/react-components";

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
        display: "flex",
        alignItems: "end",
      }}
    >
      <Image
        src={imgHref}
        alt={imgAlt}
        style={{
          position: "relative",
          maxHeight: "15vh",
          height: "100%",
          aspectRatio: "1/1",
        }}
      />
    </Link>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="Footer"
      style={{
        zIndex: "1",
        display: "flex",
        height: "15vh",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#3d3d3d",
        backgroundImage: "url('/images/green_gardens.jpeg')",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <Stack
        style={{
          height: "60%",
          maxWidth: "50%",
          backgroundColor: "#ddd",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "2%",
        }}
      >
        <Link as="a" href="/" target="" style={{ height: "100%" }}>
          <Image
            src="/public/favicon.ico"
            alt="Logo"
            style={{
              aspectRatio: "1/1",
              height: "100%",
              width: "100%",
              border: "1px solid rgb(40, 40, 40, 0.3)",
            }}
          />
        </Link>
      </Stack>
      <Stack
        style={{
          height: "90%",
          width: "20%",
          maxWidth: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "space-around",
          marginRight: "2%",
          marginBottom: "2%",
        }}
      >
        <nav
          style={{
            position: "relative",
            zIndex: "2",
            height: "50%",
            width: "100%",
            gap: "10%",
            marginTop: "5%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "rgba(50, 50, 50, 0.45)",
            borderRadius: "10px",
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
            href="https://github.com/amandadr"
            target="_blank"
          />
          <FooterLink
            imgHref="/icons/gmail-color.svg"
            imgAlt="Email"
            href="mailto:amandadroy@gmail.com"
            target="_blank"
          />
        </nav>
        <Text
          size={300}
          align="end"
          style={{
            marginTop: "5%",
            backgroundColor: "rgba(50, 50, 50, 0.45)",
            borderRadius: "10px",
            paddingInline: "3%",
          }}
        >
          © {currentYear} Amanda Roy
        </Text>
      </Stack>
    </footer>
  );
};

export default Footer;
