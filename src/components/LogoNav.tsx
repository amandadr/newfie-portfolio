import React, { useEffect, useState, useRef } from "react";
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

interface LogoNavProps {
  footerRef: React.RefObject<HTMLDivElement>;
}

const LogoNav: React.FC<LogoNavProps> = ({ footerRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 0.75; // Adjust the multiplier to control the fade window

      setScrollDepth(scrollPercent);

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFooterVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [footerRef]);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 25,
        width: "100%",
        maxWidth: "100%",
        height: "100vh",
        maxHeight: "100vh",
        display: isFooterVisible ? "none" : "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        transition: "opacity 0.5s ease",
        opacity: isScrolled ? Math.max(0.5, 1 - scrollDepth) : 1,
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
              <Link appearance="subtle" href="/">
                Home
              </Link>
            </MenuItem>
            <MenuItem key="about">
              <Link appearance="subtle" href="/about">
                About
              </Link>
            </MenuItem>
            <MenuItem key="projects">
              <Link appearance="subtle" href="/projects">
                Projects
              </Link>
            </MenuItem>
            <MenuItem key="contact">
              <Link appearance="subtle" href="/contact">
                Contact
              </Link>
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  );
};

export default LogoNav;
