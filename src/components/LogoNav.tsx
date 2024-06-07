import React from "react";
import {
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  Link,
  Image,
} from "@fluentui/react-components";
import { Button } from "@fluentui/react-button";

const LogoNav: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 25,
        width: "100%",
        maxWidth: "100%%",
        height: "100vh",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <Menu>
        <div
          style={{
            marginLeft: "1.5em",
            marginTop: "1.5em",
            minWidth: "5%",
            minHeight: "5%",
            maxWidth: "15%",
            maxHeight: "15%",
            width: "2em",
            height: "2em",
          }}
        >
          <MenuTrigger>
            <Button style={{ padding: 0, margin: 0 }}>
              <Image
                src="/favicon.ico"
                alt="LogoNav"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </MenuTrigger>
        </div>
        <MenuPopover>
          <MenuList>
            <MenuItem key="home">
              <Link appearance="subtle" href="/" >Home</Link>
            </MenuItem>
            <MenuItem key="about">
              <Link appearance="subtle" href="/about">About</Link>
            </MenuItem>
            <MenuItem key="projects">
              <Link appearance="subtle" href="/projects">Projects</Link>
            </MenuItem>
            <MenuItem key="contact">
              <Link appearance="subtle" href="/contact">Contact</Link>
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  );
};

export default LogoNav;
