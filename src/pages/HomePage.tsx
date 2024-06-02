import React from "react";
import Hero from "components/Hero";
import Introduction from "components/Introduction";
import Footer from "components/Footer";
import NavContainer from "components/NavContainer";
import "../index.css";


const HomePage: React.FC = () => {
  const navIcons = [
    {
      label: "About",
      url: "/about",
      imageUrl:
        "https://images.pexels.com/photos/25000745/pexels-photo-25000745/free-photo-of-a-small-boat-docked-on-a-dock-near-a-small-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      label: "Projects",
      url: "/projects",
      imageUrl:
        "https://images.pexels.com/photos/7575543/pexels-photo-7575543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      label: "Contact",
      url: "/contact",
      imageUrl:
        "https://images.pexels.com/photos/11542270/pexels-photo-11542270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/amandadroy/",
      imageUrl:
        "https://images.pexels.com/photos/9011357/pexels-photo-9011357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      label: "GitHub",
      url: "https://github.com/amandadr",
      imageUrl:
        "https://images.pexels.com/photos/11542288/pexels-photo-11542288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      label: "???",
      url: "/something-else",
      imageUrl:
        "https://images.pexels.com/photos/11493011/pexels-photo-11493011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      <Footer />
    </div>
  );
};

export default HomePage;
