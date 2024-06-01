import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <Hero
        imageUrl="https://github.com/amandadr/newfie-portfolio/blob/page/homepage/public/images/green_gardens.jpeg?raw=true"
        text="Whaddya hat, bh'y?"
      />
      <Introduction />
    </div>
  );
};

export default HomePage;
