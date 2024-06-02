import React from "react";
import { Stack } from "@fluentui/react";
import { Image, Link, Text } from "@fluentui/react-components";
import FooterNav from "components/FooterNav";
import green_gardens from "/images/green_gardens.jpeg";

interface FooterProps {
  imageUrl?: string;
}

const Footer: React.FC<FooterProps> = ({ imageUrl }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="Footer"
      style={{
        position: "relative",
        zIndex: "1",
        display: "flex",
        height: "20vh",
        maxHeight: "25em",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#3d3d3d",
        color: "#fff",
      }}
    >
      <Image
        src={imageUrl || green_gardens}
        alt="Background"
        fit="cover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <Stack
        style={{
          height: "50%",
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
            src="/favicon.ico"
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
          width: "35%",
          maxWidth: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "space-around",
          marginRight: "2%",
          marginBottom: "2%",
        }}
      >
        <FooterNav />
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
