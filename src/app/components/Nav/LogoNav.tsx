import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

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
      className={
        "LogoNav fixed z-[25] ml-6 mt-6 aspect-square min-h-5 max-h-15 h-16 flex-col justify-start items-start transition-opacity duration-500 ease-in-out" +
        (isFooterVisible ? " hidden" : " flex")
      }
      style={{
        opacity: isScrolled ? Math.max(0.5, 1 - scrollDepth) : 1,
      }}
    >
      <Dropdown className="flex h-[100%] w-[100%]">
        <DropdownTrigger className="flex h-[100%] w-[100%]">
          <Button
            isIconOnly
            aria-label="Menu"
            className="relative flex h-[100%] w-[100%]"
            as={"a"}
          >
            <Image
              src="logo.png"
              alt="LogoNav"
              fill
              priority
              sizes="100%"
              className="relative flex h-[100%] w-[100%] object-contain"
            />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {filteredMenuItems.map((item) => (
            <DropdownItem key={item.key} href={item.href}>
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default LogoNav;
