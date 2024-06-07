import React from "react";
import { Image, Link } from "@fluentui/react-components";

const FooterLogo: React.FC = () => {
  return (
    <Link as="a" href="/" target="" style={{ height: "100%" }}>
      <Image
        shadow
        loading="lazy"
        src="/favicon.ico"
        alt="Logo"
        style={{
          aspectRatio: "1/1",
          height: "100%",
          width: "100%",
          border: "1px solid rgb(40, 40, 40, 0.3)",
          boxShadow:
            "0 0 10px 5px rgb(40, 40, 40, 0.3), 0 0 10px 5px rgb(40, 40, 40, 0.3)",
        }}
      />
    </Link>
  );
};

export default FooterLogo;