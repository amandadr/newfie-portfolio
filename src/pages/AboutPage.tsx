import React from "react";
import Hero from "components/Hero";
import Details from "components/Details";
import Footer from "components/Footer";

import fire from "/images/fire.jpeg";
import flower_3 from "/images/flower_3.jpeg";
import beach_2 from "/images/beach_2.jpeg";
import me_1 from "/images/me_1.jpeg";
import NavContainer from "@/components/NavContainer";
import { expIcons } from "data/AboutPage";

const AboutPage: React.FC = () => {
  return (
    <div className="AboutPage">
      <Hero text="Who Knit You?" imageUrl={fire} />
      <Details
        header="About Me"
        previewText="I am a software developer with a passion for learning. I am currently working on a project that will help people learn about how I code. It has nothing to do with knitting."
        bgImage={beach_2}
        highlightImage={me_1}
      />
      <NavContainer title="My Dev Experience:" navIcons={expIcons} />
      <Footer imageUrl={flower_3} />
    </div>
  );
};

export default AboutPage;
