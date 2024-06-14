import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Image,
} from "@nextui-org/react";

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
        aspectRatio: "1/1",
        minHeight: "5%",
        maxHeight: "15%",
        height: "4em",
        display: isFooterVisible ? "none" : "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        transition: "opacity 0.5s ease",
        opacity: isScrolled ? Math.max(0.5, 1 - scrollDepth) : 1,
      }}
    >
      <Dropdown className="flex h-[100%] w-[100%]">
        <DropdownTrigger className="flex h-[100%] w-[100%]">
          <Button
            isIconOnly
            aria-label="Menu"
            className="flex h-[100%] w-[100%]"
          >
            <Image
              src="/favicon.ico"
              alt="LogoNav"
              className="flex h-[100%] w-[100%]"
            />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {filteredMenuItems.map((item) => (
            <DropdownItem key={item.key} href={item.href} color="success">
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default LogoNav;
