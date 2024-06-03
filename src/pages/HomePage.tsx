import React from "react";
import Hero from "components/Hero";
import Introduction from "components/Introduction";
import Footer from "components/Footer";
import NavContainer from "components/NavContainer";
import { homeLinks } from "data/HomePage";
import sky_1 from "/images/sky_1.jpeg";
import "../index.css";


const HomePage: React.FC = () => {

  return (
    <div className="HomePage">
      <Hero
        imageUrl="https://images.pexels.com/photos/11398315/pexels-photo-11398315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        text="Whaddya hat, bh'y?"
      />
      <Introduction header="Hi, I'm Amanda Roy" previewText="Welcome to my portfolio, where I hope you'll learn lots about my journey :)" imageUrl="https://images.pexels.com/photos/8607512/pexels-photo-8607512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <NavContainer
        navLinks={homeLinks}
      />
      <Footer imageUrl={sky_1} />
    </div>
  );
};

export default HomePage;
