import React from "react";
import Hero from "components/Hero";
import Introduction from "components/Introduction";
import NavContainer from "components/NavContainer";
import Footer from "components/Footer";

import gorge_2 from "/images/gorge_2.jpeg";
import field from "/images/field.jpeg";
import { projectIcons } from "data/ProjectsPage";

const ProjectsPage: React.FC = () => {
  return (
    <section className="ProjectsPage">
      <Hero text="Projects" imageUrl={gorge_2} />
      <Introduction header="These are my personal projects :)" previewText="I'll tell you more about how to take it all in right here..." imageUrl="" />
      <NavContainer navIcons={projectIcons} />
      <Footer imageUrl={field} />
    </section>
  );
};

export default ProjectsPage;