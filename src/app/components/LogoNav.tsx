"use client";
import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  Link,
  Image,
  Button
} from "@fluentui/react-components";

const menuItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "contact", label: "Contact", href: "/contact" },
];

type MenuItemKey = "home" | "about" | "projects" | "contact";

interface LogoNavProps {
  footerRef: React.RefObject<HTMLDivElement>;
  currentPage: MenuItemKey;
}

const LogoNav: React.FC<LogoNavProps> = ({ footerRef, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 2; // Adjust the multiplier to control the fade window

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

  const filteredMenuItems = menuItems.filter(
    (item) => item.key !== currentPage
  );

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 25,
        marginLeft: "1.5em",
        marginTop: "1.5em",
        minWidth: "5%",
        minHeight: "5%",
        maxWidth: "15%",
        maxHeight: "15%",
        width: "2em",
        height: "2em",
        display: isFooterVisible ? "none" : "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        transition: "opacity 0.5s ease",
        opacity: isScrolled ? Math.max(0.5, 1 - scrollDepth) : 1,
      }}
    >
      <Menu>
        <div>
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
            {filteredMenuItems.map((item) => (
              <Link key={item.key} appearance="subtle" href={item.href} target="_self">
                <MenuItem key={item.key}>{item.label}</MenuItem>
              </Link>
            ))}
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  );
};

export default LogoNav;
