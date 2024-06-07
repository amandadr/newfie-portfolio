import React, {useRef} from "react";
import Hero from "components/Hero";
import Divider from "components/Divider";
import Details from "components/Details";
import NavContainer from "components/NavContainer";
import Skills from "components/Skills";
import Footer from "components/Footer";

import fire from "/images/fire.jpeg";
import flower_3 from "/images/flower_3.jpeg";
import beach_2 from "/images/beach_2.jpeg";
import me_1 from "/images/me_1.jpeg";
import gorge_1 from "/images/gorge_1.jpeg";
import { expIcons, skills } from "data/AboutPage";
import LogoNav from "@/components/LogoNav";

const AboutPage: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="AboutPage">
      <LogoNav footerRef={footerRef} currentPage="about" />
      <Hero text="Who Knit You?" imageUrl={fire} />
      <Divider outline={true} />
      <Details
        header="About Me"
        previewText="I am a software developer with a passion for learning. I am currently working on a project that will help people learn about how I code. It has nothing to do with knitting."
        bgImage={beach_2}
        highlightImage={me_1}
        highlightPosition="right"
      />
      <Divider outline={true} width="0.5em" />
      <NavContainer title="My Dev Experience:" navIcons={expIcons} />
      <Divider />
      <Details
        header="What I Believe In"
        previewText="I believe in the power of learning and the importance of sharing knowledge. I believe that everyone has the potential to learn and grow."
        bgImage={"/images/flower_2.jpeg"}
        highlightImage={"/images/trees_2.jpeg"}
        highlightPosition="left"
      />
      <Divider outline={true} />
      <Skills skills={skills.icons} imageUrl={gorge_1} />
      <Divider outline={true} />
      <Details
        header="Dreams for the Future"
        previewText="I dream of a world where everyone has access to the tools they need to learn and grow. I dream of a world where everyone has the opportunity to reach their full potential."
        bgImage={"/images/river.jpeg"}
        highlightImage="/images/trees_3.jpeg"
        highlightPosition="right"
      />
      <Divider outline={true} />
      <Footer ref={footerRef} imageUrl={flower_3} />
    </div>
  );
};

export default AboutPage;
