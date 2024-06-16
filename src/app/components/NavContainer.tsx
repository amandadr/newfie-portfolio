"use client";
import React, { useState } from "react";
import NavItem from "components/NavItem";
import Modal from "components/Modal";

interface NavContainerProps {
  navItems: {
    imageUrl: string;
    label: string;
    details?: {
      date: string;
      header: string;
      content: string;
      modalUrl?: string;
      images?: string[];
      liveUrl?: string;
      githubUrl?: string;
      techStack?: { class: string; name: string }[];
    };
    url?: string;
    target?: string;
  }[];
  title?: string;
}

const NavContainer: React.FC<NavContainerProps> = ({ navItems, title }) => {
  const [selectedNavIcon, setSelectedNavIcon] = useState<string | null>(null);

  const handleNavItemClick = (item: NavContainerProps["navItems"][number]) => {
    if (item.details) {
      setSelectedNavIcon(item.label);
    }
  };

  return (
    <div className="NavContainer max-w-full bg-black/50 flex flex-col items-center justify-between">
      {title && (
        <h2 className="z-30 absolute flex items-center justify-center h-1em w-fit p-3 -mt-11 text-3xl font-semibold text-white text-shadow-text-outline bg-black/50 rounded-xl shadow-md">
          {title}
        </h2>
      )}
      {selectedNavIcon ? (
        <Modal
          isOpen={selectedNavIcon !== null}
          onClose={() => setSelectedNavIcon(null)}
          {...navItems.find((item) => item.label === selectedNavIcon)?.details}
        />
      ) : (
        <div className="relative min-h-[33.33vh] max-h-full w-full flex flex-row flex-wrap justify-around bg-black/50">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              {...item}
              onClick={() => handleNavItemClick(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavContainer;
