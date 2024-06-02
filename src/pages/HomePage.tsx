import React from "react";
import NavContainer from "../components/NavContainer";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import "../index.css";


const HomePage: React.FC = () => {
  const navIcons = [
    {
      label: "GitHub",
      url: "/github",
      imageUrl:
        "https://images.pexels.com/photos/11398316/pexels-photo-11398316.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      label: "LinkedIn",
      url: "/linkedin",
      imageUrl:
        "https://images.pexels.com/photos/9011357/pexels-photo-9011357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      label: "Resume",
      url: "/resume",
      imageUrl:
        "https://images.pexels.com/photos/11398315/pexels-photo-11398315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      label: "Contact",
      url: "/contact",
      imageUrl:
        "https://images.pexels.com/photos/11398315/pexels-photo-11398315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      label: "Projects",
      url: "/projects",
      imageUrl:
        "https://images.pexels.com/photos/11398315/pexels-photo-11398315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      label: "Projects",
      url: "/projects",
      imageUrl:
        "https://images.pexels.com/photos/11398315/pexels-photo-11398315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="HomePage">
      <Hero
        imageUrl="https://images.pexels.com/photos/11398315/pexels-photo-11398315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        text="Whaddya hat, bh'y?"
      />
      <Introduction backgroundImageUrl="https://images.pexels.com/photos/8607512/pexels-photo-8607512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <NavContainer
        navIcons={navIcons}
      />
    </div>
  );
};

export default HomePage;
