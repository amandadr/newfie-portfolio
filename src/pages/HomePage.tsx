import React from "react";
import Hero from "components/Hero";
import Introduction from "components/Introduction";
import Footer from "components/Footer";
import NavContainer from "components/NavContainer";
import { navIcons } from "data/HomePage";
import "../index.css";


const HomePage: React.FC = () => {

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
